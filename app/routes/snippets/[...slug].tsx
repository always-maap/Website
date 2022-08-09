import Container from "../../components/Container";
import Navigation from "../../components/Navigation";

interface Data {
  content: FrontMatter["content"];
  page: FrontMatter["data"];
}

interface FrontMatter {
  content: string;
  data: {
    title: string;
    desc: string;
  };
}

const SNIPPETS = "../../content/snippets";

export default function Snippets() {
  return (
    <Container>
      <Navigation active="/snippets" />
      <div
      // dangerouslySetInnerHTML={{ __html: gfm.render(props.data.content) }}
      />
    </Container>
  );
}
