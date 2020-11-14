import SEO from "@/components/SEO";
import { Container, Text, Background } from "../styles/pages/404";

export default function NotFound() {
  return (
    <Container>
      <SEO title="Page not found :(" />
      <Text>
        <h1>404</h1>
        <p>are you lost? lol</p>
      </Text>
      <Background />
    </Container>
  );
}
