import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    src: url("../../fonts/NunitoSans-Light.woff") format("woff");
    font-style: normal;
    font-weight: 300;
    font-display: fallback;
  }
  @font-face {
    font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    src: url("../../fonts/NunitoSans-SemiBold.woff") format("woff");
    font-style: normal;
    font-weight: 600;
    font-display: fallback;
  }
  @font-face {
    font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
    src: url("../../fonts/NunitoSans-ExtraBold.woff") format("woff");
    font-style: normal;
    font-weight: 800;
    font-display: fallback;
  }
  * {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin: 0;
    transition: all 0.50s linear;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
  }
  `