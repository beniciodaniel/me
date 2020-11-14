import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Background = styled.div`
  flex: 1;
  background: url("../../background.jpeg") no-repeat;
  background-size: cover;
  background-position: top;
`;

export const ContentFooterWrapper = styled.div`
  width: 100%; // responsável pelo Content ocupar tudo quando tela diminuída
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  width: 320px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p + p {
    margin-bottom: 16px;
  }

  div {
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

    a + a {
      margin-left: 12px;
    }
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
