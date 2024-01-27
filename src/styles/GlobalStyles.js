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

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
      background-color: #a7a7a7;
    }

    ::-webkit-scrollbar-track {
      background-color: #333d51;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
`;

export default GlobalStyles;
