import Container from "../components/Container";
import Navigation from "../components/Navigation";

const TITLE = "Mohammad ali Ali panah";
const DESCRIPTION = "Mohammad ali Ali panah - Front-end lead at Zoomit";

export function Meta() {
  return {
    title: TITLE,
    description: DESCRIPTION,
  };
}

export default function Snippets() {
  return (
    <Container>
      <Navigation active="/snippets" />
    </Container>
  );
}
