import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    height: fit-content;
    padding: 15px 0;
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.301);
`

export const HeaderContent = styled.div`
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
`


export const Logo = styled.h1`

    a{
        text-decoration: none;


        img{
            width: auto;
            height: 50px;
        }
    }
`

interface SearchInputProps {
    type: string
    placeholder: string
}

export const FormContainer = styled.form`
    width: 40%;
    display: flex;
    gap: 20px;
    align-items: center;

`

export const SearchInput = styled.input<SearchInputProps>`
    width: 100%;
    color: ${props => props.theme['gray-100']};
    padding: 15px 25px;
    border-radius: 6px;
    background-color: ${props => props.theme['gray-500']};
    border: 0;

    &::placeholder{
        color: ${props => props.theme['gray-100']};
    }
`

interface ButtonSubmitProps {
    isDisabled: boolean
}

export const ButtonSubmit =  styled.button<ButtonSubmitProps>`
    min-height: 50px;
    min-width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.isDisabled == true ? props.theme['gray-500']:props.theme['purple-500'] };
    color: ${props => props.theme.white};

    cursor: ${props => props.isDisabled === true ? 'default' : 'pointer'};
    transition: 0.4s;
    border: 0;

    
`