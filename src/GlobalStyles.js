import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        box-sizing: border-box;
       
        letter-spacing: 2px;
        line-height: 1.6;
    }

    body{
         margin: 0;
        padding: 0;
        background: #000;
        color: #fff;

    }
`