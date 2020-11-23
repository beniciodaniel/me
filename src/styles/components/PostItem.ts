import styled, { css } from "styled-components";
interface IPostSelectedProps {
  postId?: string;
  showPostId?: string;
}

export const Post = styled.li<IPostSelectedProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

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
  /* padding: 5px; */

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
