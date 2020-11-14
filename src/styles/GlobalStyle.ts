import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family:  Roboto, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-height: 375px) {
    #__next {
      margin: 0 auto;

      font-size: 14px;

      p {
        margin: 0;
      }
    }
  }
`;
