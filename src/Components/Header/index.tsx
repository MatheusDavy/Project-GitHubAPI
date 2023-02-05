import { ButtonSubmit, FormContainer, HeaderContainer, HeaderContent, Logo, SearchInput } from "./styles";
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from "react";
import {useNavigate, Link} from 'react-router-dom'
import LogoImage from '../../assets/images/logo.png'

export function Header(){

    const navigate = useNavigate();

    const [inputIsEmpty, setInputIsEmpty] = useState(true)

    function handleChangeInputElement(element: any){
        element.target.value != '' ? setInputIsEmpty(false) : setInputIsEmpty(true)
    }

    function handleSubmitSearchInput(){
        event?.preventDefault()
        const valueName: string = event?.target?.name.value
        if(valueName !== ''){
            navigate(`/user/${valueName}`);
        }
    }

    return(
        <HeaderContainer>
            <HeaderContent>
                <Logo>
                    <Link to='/'>
                        <img src={LogoImage} alt="" />
                    </Link>
                </Logo>


                <FormContainer onSubmit={handleSubmitSearchInput}>
                    <SearchInput name='name' type="text" placeholder="search for github users" onChange={handleChangeInputElement}/>
                    <ButtonSubmit type='submit' isDisabled={inputIsEmpty}>
                        <AiOutlineSearch size={25}/>
                    </ButtonSubmit>
                </FormContainer>
            </HeaderContent>
        </HeaderContainer>
    )
}