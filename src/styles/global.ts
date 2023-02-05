import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadown: 0 0 0 0;
    }

    body{
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme.white};
        --webkit-font-smoothing: antialiased;
    }

    body, textarea, input, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`