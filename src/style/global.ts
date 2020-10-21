import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: #161C40;
        color: #F2CE1B;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-family: 'Poppins', serif; 
        font-size: 20px;
    }

    button, a{
        cursor: pointer;
    }
`;