import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import features from "../../../content/features.json";

export default function Blog() {
  return (
    <Container>
      <Navigation active="/blog" />
      {features.blog.map((article) => (
        <ArticleCard
          key={article.title}
          title={article.title}
          berief={article.berief}
          link={article.link}
        />
      ))}
    </Container>
  );
}

interface Article {
  title: string;
  berief: string;
  link: string;
}

function ArticleCard(props: Article) {
  return (
    <a href={props.link}>
      <article className="dark:bg-gray-900">
        <h4 className="text-xl font-semibold w-full text-gray-900 dark:text-gray-100 tracking-tight">
          {props.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 my-6">{props.berief}</p>
        <div>Read more</div>
      </article>
    </a>
  );
}
