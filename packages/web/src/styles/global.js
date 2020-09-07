import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;

    }

    body{
        background: ${props => props.theme.colors.primary};
        font-size: 14px;
        color: ${props => props.theme.colors.white};
        font-family: ${props => props.theme.fontFamily}, sans-serif;
    }

    #root{
        width: 100%;
        height: 100%;
    }

    a{
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
    }

    a:active,a:hover{
        color: ${props => props.theme.colors.purpleLight};
    }

    form{
        width: 100%;
    }

    input{
        min-height: 40px;
        width: 100%;
        color: ${props => props.theme.colors.black};
        padding-left: 4%;
        padding-right: 4%;
        border: 2px solid ${props => props.theme.colors.gray};
        border-radius: 5px;
        margin-bottom: 10px;
        font-weight: normal;
    }
    input.negative{
        border: 2px solid red;
    }
`
