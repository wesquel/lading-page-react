import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {

  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1 {
    font-size: 4.5rem;
    font-family: ${({ theme }) => theme.fonts.family.secondary};
  }
`;
