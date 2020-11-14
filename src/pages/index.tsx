import SEO from "../components/SEO";

import {
  Container,
  Background,
  ContentFooterWrapper,
  Content,
  Footer,
} from "../styles/pages/Home";

export default function Home() {
  return (
    <Container>
      <SEO title="Benício Daniel" />

      <Background />

      <ContentFooterWrapper>
        <Content>
          <h3>Benício Daniel Hasegawa</h3>
          <p>developer & architect</p>
          <p>benicio.daniel@gmail.com</p>
          <p>curitiba / brazil</p>

          <div>
            <a
              href="https://github.com/beniciodaniel"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>github </strong>
            </a>
            <a
              href="https://www.linkedin.com/in/benicio-daniel/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>linkedIn </strong>
            </a>
            <a
              href="https://www.instagram.com/beniciohasegawa"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>instagram </strong>
            </a>
          </div>
        </Content>

        <Footer>
          <a
            href="https://instagram.com/beniciohasegawa"
            target="_blank"
            rel="noopener noreferrer"
          >
            made by @beniciohasegawa
          </a>
        </Footer>
      </ContentFooterWrapper>
    </Container>
  );
}
