import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
 
}

html,body,#root{
    min-height: 100vh;
}
/* 
body {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0;
    flex: 1 0 auto;
}
footer {
    margin-top: auto;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
} */

`;
