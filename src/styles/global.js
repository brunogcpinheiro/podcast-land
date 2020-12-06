import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 13px;
    font-family: "Nunito", sans-serif;
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

export default globalStyles;