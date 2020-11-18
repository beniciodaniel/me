import { useState } from "react";
import { GetServerSideProps } from "next";
import { format, parseISO } from "date-fns";

import SEO from "../components/SEO";

import { client } from "@/lib/prismic";
import { Document } from "prismic-javascript/types/documents";
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";

import {
  Container,
  Background,
  ContentFooterWrapper,
  Content,
  PostListContainer,
  Post,
  PostButton,
  PostText,
  PostImage,
  Footer,
} from "../styles/pages/Home";

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
        <Content isPostConfiguration={!!isPostConfiguration}>
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
          </div>

          {isPostConfiguration && !!posts.length && (
            <PostListContainer>
              <ul>
                {posts.map((post) => {
                  return (
                    <Post key={post.id}>
                      <PostButton
                        onClick={() => handleClickedPostVisualization(post.id)}
                        postId={post.id}
                        showPostId={showPostId}
                      >
                        <span>
                          {format(parseISO(post.data.postdate), "dd/MM/yyyy")}
                        </span>
                        <strong>
                          {PrismicDOM.RichText.asText(post.data.title)}
                        </strong>
                      </PostButton>

                      <PostText postId={post.id} showPostId={showPostId}>
                        <span>
                          {PrismicDOM.RichText.asText(post.data.text)}
                        </span>
                      </PostText>

                      <PostImage
                        postId={post.id}
                        showPostId={showPostId}
                        src={post.data.thumbnail.list320.url}
                        alt="Imagem"
                      />
                    </Post>
                  );
                })}
              </ul>
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

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const posts = await client().query([
    Prismic.Predicates.at("document.type", "post"),
  ]);

  return {
    props: {
      posts: posts.results,
    },
  };
};
