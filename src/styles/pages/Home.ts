import styled, { css } from "styled-components";

interface IPostConfigurationProps {
  isPostConfiguration: boolean;
}

interface IPostSelectedProps {
  postId?: string;
  showPostId?: string;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Background = styled.div<IPostConfigurationProps>`
  flex: 1;
  background: url("../../background.jpeg") no-repeat;
  background-size: cover;
  background-position: top;

  transition: flex 0.8s;

  ${(props) =>
    props.isPostConfiguration &&
    css`
      flex: none;
    `}
`;

export const ContentFooterWrapper = styled.div<IPostConfigurationProps>`
  width: 100%;
  /* height: 100%; */
  max-width: 500px;

  padding: 20px 0 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: max-width 0.8s;

  ${(props) =>
    props.isPostConfiguration &&
    css`
      max-width: 100%;
    `}
`;

export const Header = styled.header<IPostConfigurationProps>`
  width: 320px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #765898;

  p + p {
    margin-bottom: 16px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #232129;
      padding-top: 5px;

      &:hover {
        color: #52d053;
      }

      strong {
        text-align: center;
      }
    }

    a + a,
    a + button {
      margin-left: 12px;
    }

    > button {
      border: 0;
      background: transparent;

      color: #232129;
      padding: 5px 0 5px 5px;

      font-size: 16px;

      &:hover {
        color: #d830a8;
      }

      strong {
        text-align: center;
      }

      ${(props) =>
        props.isPostConfiguration &&
        css`
          color: #d830a8;
        `}
    }
  }
`;

export const Content = styled.main<IPostConfigurationProps>`
  /* height: 100vh; */
  width: 320px;
  overflow: auto;

  /* background: red; */

  // no post yet
  div:last-child {
    /* background: pink; */
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
`;

export const PostListContainer = styled.div`
  padding-top: 16px;
  margin-top: 1rem;

  /* overflow: auto; */

  font-family: "Times New Roman", Times, serif;
`;

export const PostUl = styled.ul`
  list-style-type: none;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Post = styled.li<IPostSelectedProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  /* margin-bottom: -10px; */

  ${(props) =>
    props.postId === props.showPostId &&
    css`
      margin-bottom: 16px;
    `}
`;

export const PostButton = styled.button<IPostSelectedProps>`
  border: 0;
  background: transparent;

  color: #232129;
  padding: 5px;

  font-size: 16px;
  text-transform: lowercase;

  padding: 0 0 5px 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #232129;

  span {
    width: 75px; // marcando a largura exata
    text-align: left;
  }

  &:hover {
    color: #d830a8;
  }

  ${(props) =>
    props.postId === props.showPostId &&
    css`
      color: #d830a8;
    `}
`;

export const PostText = styled.div<IPostSelectedProps>`
  margin-bottom: 1rem;
  /* height: 0; */

  span {
    text-align: justify;
    line-height: 20px;

    /* transition: opacity 0.5s ease-in;
    opacity: 0;
    height: 0;
    overflow: hidden; */

    display: none;

    ${(props) =>
      props.postId === props.showPostId &&
      css`
        /* opacity: 1;
        height: auto; */
        display: block;
      `}
  }
`;

export const PostImage = styled.img<IPostSelectedProps>`
  width: 100%;
  height: 320px;

  transition: opacity 1s ease-in;
  opacity: 0;
  height: 0;
  overflow: hidden;

  ${(props) =>
    props.postId === props.showPostId &&
    css`
      opacity: 1;
      height: auto;
      transition: opacity 0.5s ease-in;
    `}
`;

export const PostVideo = styled.div<IPostSelectedProps>`
  iframe {
    margin-top: -20px;

    transition: opacity 1s ease-in;
    opacity: 0;
    height: 0;
    overflow: hidden;

    ${(props) =>
      props.postId === props.showPostId &&
      css`
        opacity: 1;
        height: auto;
        transition: opacity 0.5s ease-in;
      `}
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #232129;
  }
`;
