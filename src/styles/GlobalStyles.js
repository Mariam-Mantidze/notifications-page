import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding:0;
    margin: 0;
    box-sizing: border-box;


}

body {

    display: flex;
  flex-direction: column;
 /* align-items: center; */
 min-height: 100dvh;
 font-family: "Plus Jakarta Sans", sans-serif;

 @media(min-width: 1000px) {
    background-color: rgba(247, 250, 253, 1);
    display: flex;
    align-items: center;
    padding-top: 63px;
 }
}
`;
