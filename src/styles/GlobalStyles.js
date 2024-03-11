import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding:0;
    margin: 0;
    box-sizing: border-box;


}

body {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
  flex-direction: column;
 /* align-items: center; */
 min-height: 100dvh;
 font-family: "Plus Jakarta Sans", sans-serif;
}
`;
