import { useState } from "react";
import { GetStaticProps } from "next";

import SEO from "../components/SEO";

import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import Prismic from "prismic-javascript";

import {
  Container,
  Background,
  ContentFooterWrapper,
  Header,
  Content,
  PostListContainer,
  PostUl,
  Footer,
} from "../styles/pages/Home";
import PostItem from "@/components/PostItem";

interface IHomeProps {
  posts: Document[];
}

export default function Home({ posts }: IHomeProps) {
  const [isPostConfiguration, setIsPostConfiguration] = useState(false);
  const [showPostId, setShowPostId] = useState("");

  function handlePostConfiguration() {
    setIsPostConfiguration(!isPostConfiguration);
  }

  function handleClickedPostVisualization(postId: string) {
    postId === showPostId
      ? setShowPostId(() => "")
      : setShowPostId(() => postId);
  }

  return (
    <Container>
      <SEO title="Benício Daniel" />

      <Background isPostConfiguration={!!isPostConfiguration} />

      <ContentFooterWrapper isPostConfiguration={!!isPostConfiguration}>
        <Header isPostConfiguration={!!isPostConfiguration}>
          <button type="button" onClick={() => handlePostConfiguration()}>
            <h3>Benício Daniel Hasegawa</h3>
          </button>

          <p>developer & architect</p>
          <p>benicio.daniel@gmail.com</p>
          <p>curitiba / brazil</p>

          <nav>
            <a
              href="https://github.com/beniciodaniel"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>github</strong>
            </a>
            <a
              href="https://www.linkedin.com/in/benicio-daniel/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>linkedIn</strong>
            </a>
            <a
              href="https://www.instagram.com/beniciohasegawa"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>instagram</strong>
            </a>
            <button type="button" onClick={() => handlePostConfiguration()}>
              <strong>blog</strong>
            </button>
          </nav>
        </Header>

        <Content isPostConfiguration={!!isPostConfiguration}>
          {isPostConfiguration && !!posts.length && (
            <PostListContainer>
              <PostUl>
                {posts.map((post) => {
                  return (
                    <PostItem
                      key={post.id}
                      post={post}
                      handleClickedPostVisualization={
                        handleClickedPostVisualization
                      }
                      showPostId={showPostId}
                    />
                  );
                })}
              </PostUl>
            </PostListContainer>
          )}

          {isPostConfiguration && !posts.length && (
            <div>
              <p>no posts yet :(</p>
            </div>
          )}
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

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const posts = await client().query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[document.last_publication_date desc]" }
  );

  return {
    props: {
      posts: posts.results,
    },
    revalidate: 3600,
  };
};
