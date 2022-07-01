/** @jsx h */
import { h } from "preact";
import Container from "../components/Container.tsx";
import Me from "../components/Me.tsx";

export default function Home() {
  return (
    <Container>
      <Me />
    </Container>
  );
}
