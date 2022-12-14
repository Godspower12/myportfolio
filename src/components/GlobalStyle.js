import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding:0;
    box-sizing: border-box
}

html {
    @media (max-width: 800px){
    font-size: 50%
    }
    @media (max-width: 800px){
        /* opacity: 0; */

    }
}
body {
     background: #1b1b1b;
     font-family: 'Inter', Sans-serif;
     overflow-x: hidden;
}

button {
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
        background-color : #23d997;
        color: white;
    }
    
}

h2 {
   font-weight: bold;
   font-size: 4rem; 
}

h3 {
    color: white;

}
h4 {
    font-weight: lighter;
}
a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    font-size: bold;
}
span {
    font-weight: bold;
    color: #23d997; 

}
p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
}
`;

export default GlobalStyle;