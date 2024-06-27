import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0 auto;
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }
`;
