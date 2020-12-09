import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Varela Round", sans-serif;
  }

  body {
    font-size: 13px;
    background-color: ${colors.black};
    color: ${colors.white};
  }

  ul {
    list-style: none;
  }
`;

export default globalStyles;