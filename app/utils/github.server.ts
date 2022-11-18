import { Octokit as createOctokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";

const Octokit = createOctokit.plugin(throttling);

type ThrottleOptions = {
  method: string;
  url: string;
  request: { retryCount: number };
};

interface GitHubFile {
  path: string;
  content: string;
}

const octokit = new Octokit({
  auth: process.env.BOT_GITHUB_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.warn(
        `Request quota exhausted for request ${options.method} ${options.url}. Retrying after ${retryAfter} seconds.`
      );

      return true;
    },
    onAbuseLimit: (_: number, options: ThrottleOptions) => {
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  },
});

async function downloadDirectory(dir: string): Promise<Array<GitHubFile>> {
  const dirList = await downloadDirList(dir);

  const result = await Promise.all(
    dirList.map(async ({ path: fileDir, type, sha }) => {
      switch (type) {
        case "file": {
          const content = await downloadFileBySha(sha);
          return { path: fileDir, content };
        }
        case "dir": {
          return downloadDirectory(fileDir);
        }
        default: {
          throw new Error(`Unexpected repo file type: ${type}`);
        }
      }
    })
  );

  return result.flat();
}

async function downloadFileBySha(sha: string) {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/git/blobs/{file_sha}",
    {
      owner: "always-maap",
      repo: "Website",
      file_sha: sha,
    }
  );
  const encoding = data.encoding as Parameters<typeof Buffer.from>["1"];
  return Buffer.from(data.content, encoding).toString();
}

async function downloadFile(path: string) {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "always-maap",
      repo: "Website",
      path,
    }
  );

  if (!("content" in data)) {
    console.error(data);
    throw new Error(
      `Tried to get ${path} but got back something that was unexpected. It doesn't have a content or encoding property`
    );
  }

  const encoding = data.encoding as Parameters<typeof Buffer.from>["1"];
  return Buffer.from(data.content, encoding).toString();
}

async function downloadDirList(path: string) {
  const resp = await octokit.repos.getContent({
    owner: "always-maap",
    repo: "Website",
    path,
  });
  const data = resp.data;

  if (!Array.isArray(data)) {
    throw new Error(
      `Tried to download content from ${path}. GitHub did not return an array of files. This should never happen...`
    );
  }

  return data;
}

export { downloadDirList, downloadFile, downloadDirectory };
