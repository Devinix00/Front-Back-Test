import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset} 

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    *{
      color: white;
      word-break: keep-all;
    }
`;

export default GlobalStyles;
