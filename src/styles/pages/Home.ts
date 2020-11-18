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

  transition: flex 0.3s;

  ${(props) =>
    props.isPostConfiguration &&
    css`
      flex: none;
    `}
`;

export const ContentFooterWrapper = styled.div<IPostConfigurationProps>`
  width: 100%; // responsável pelo Content ocupar tudo quando tela diminuída
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: max-width 0.3s;

  ${(props) =>
    props.isPostConfiguration &&
    css`
      max-width: 100%; // se não edita isso, ficará no máximo 500
    `}
`;

export const Content = styled.main<IPostConfigurationProps>`
  padding: 20px 0 20px 0;

  width: 320px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  div:last-child {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

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
      padding: 5px;

      &:hover {
        color: #d830a8;
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
      padding: 5px;

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

export const PostListContainer = styled.div`
  border-top: 1px solid #232129;
  padding-top: 16px;
  margin-top: 1rem;

  font-family: "Times New Roman", Times, serif;

  ul {
    list-style-type: none;
    width: 100%;

    li + li {
      margin-top: 1rem;
    }
  }
`;

export const Post = styled.li<IPostSelectedProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

  span {
    text-align: justify;

    transition: opacity 0.7s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;

    ${(props) =>
      props.postId === props.showPostId &&
      css`
        opacity: 1;
        height: auto;
      `}
  }
`;

export const PostImage = styled.img<IPostSelectedProps>`
  width: 100%;
  height: 320px;

  transition: opacity 0.7s ease-out;
  opacity: 0;
  height: 0;
  overflow: hidden;

  ${(props) =>
    props.postId === props.showPostId &&
    css`
      opacity: 1;
      height: auto;
    `}
`;

export const Footer = styled.footer`
  margin-top: 2rem;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #232129;
  }
`;
