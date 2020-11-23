import styled, { css } from "styled-components";

interface IPostConfigurationProps {
  isPostConfiguration: boolean;
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

  margin-bottom: 10px;

  ${(props) =>
    props.isPostConfiguration &&
    css`
      padding-bottom: 5px;
      border-bottom: 1px solid #000;
    `}

  > button {
    background: transparent;
    border: 0;
    font-size: 18px;

    &:hover {
      color: #d830a8;
    }
  }

  p + p {
    margin-bottom: 16px;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #232129;
      padding-top: 5px;

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

  // no post yet
  div:last-child {
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

  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
`;

export const Footer = styled.footer`
  margin-top: 2rem;

  a {
    text-decoration: none;
    font-size: 14px;
    color: #232129;
  }
`;
