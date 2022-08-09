import Container from "../components/Container";
import Navigation from "../components/Navigation";

const TITLE = "Mohammad ali Ali panah";
const DESCRIPTION = "Mohammad ali Ali panah - Front-end lead at Zoomit";

export default function About() {
  return (
    <Container>
      <Navigation active="/about" />
    </Container>
  );
}
