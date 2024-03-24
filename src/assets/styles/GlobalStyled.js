import styled, { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { theme } from "./vars";

export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  color: ${theme.color.main};
  font-size: 16px;
  line-height: 1.50;

  width: 100%;
  height: 100vh;
  margin: 0;

  overflow: auto;
}

a {
 text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p {
   margin: 0;
 }

img,svg {
  display: block;
  width: 100%;
  height: 100%;
}

button {
  cursor: pointer;
 }

  * {
  box-sizing: border-box;
  }

`;

export const Container = styled.div`
  width: 1440px;
  padding: 0 64px;
  margin: 0 auto;
`;