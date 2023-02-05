import styled from "styled-components";
import BackgroundImage from '../../assets/images/space-bg.jpg'


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    width: 100%;   
    min-height: 100vh;
    background-image: url(${BackgroundImage});
    background-size: cover;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        background: linear-gradient(180deg,transparent 0%, black 100%);
        z-index: 0;
        backdrop-filter: blur(10px);

    }

`

export const HomeBannerContainer = styled.section`
    margin: 0 auto;
    max-width: 1080px;
    width: 90%;
    padding: 80px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    position: relative;
    z-index: 1;
`

export const TittleBannerContainer = styled.div`
display: flex;
flex-direction: column;
gap: 50px;
align-items: flex-start;
max-width: 510px;

h1{
    font-size: 67px;
    line-height: 1.1;
    font-weight: 600;
    color: ${props => props.theme.white};;
}

a{
    font-size: 14px;
    line-height: 1.3;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 170px;
    border-radius: 16px;
    text-decoration: none;
    
    gap: 15px;

    background-color: ${props => props.theme['purple-500']};
    color: ${props => props.theme.white};
    span, svg{
        transition: 0.4s;
    }
    span{
        transform: translateX(20px);
    }
    svg{
        opacity: 0;
        transform: translateX(-20px);
    }

    &:hover{
        span{
            transform: translateX(0px);
            font-weight: bold;
        }
        svg{
            opacity: 1;
            transform: translateX(0px);

        }
    }
}

`

