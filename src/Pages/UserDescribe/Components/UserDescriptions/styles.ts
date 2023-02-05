import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 90%;
  max-width: 1080px;
  display: grid;
  gap: 40px;
  grid-template-columns: 300px 1fr;
  align-items: flex-start;

  margin: 0 auto;
  padding-top: 150px;
`;

// Aside Content
export const UserProfileAside = styled.aside`
  width: 100%;
  height: auto;
  padding: 20px;

  width: 100%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.301);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const UserProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  border: 3px solid ${(props) => props.theme["purple-500"]};
  padding: 2px;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export const UserProfileName = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme["purple-500"]};
  font-weight: 300;
`;
export const UserProfileBio = styled.p`
  width: 100%;
  height: auto;
  min-height: 70px;
  padding: 10px;
  border: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme["gray-100"]};
  background-color: rgba(89, 89, 89, 0.2);
  border-radius: 8px;
`;  

// Middle Content
export const UserProfileMain = styled.main`
  flex: 1;
  height: auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.301);
  border-radius: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const UserProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  width: fit-content;

  span {
    width: 100%;
    background-color: rgba(89, 89, 89, 0.2);
    border-radius: 8px;
    padding: 15px;

    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    font-weight: 300;
    color: ${(props) => props.theme.white};
    fill: ${(props) => props.theme.white};
  }
`;
export const UserProfileRepos = styled.div`

  flex: 1;
  min-width: 300px;
  height: auto;
  font-size: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
 

  .repos_container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background-color: rgba(89, 89, 89, 0.2);
    border-radius: 8px;

    span{
        font-size: 14px;
        font-weight: 300;
        color: ${props => props.theme['gray-100']};
    }


    .repos_info{
        display: flex;
        align-items: center;
        gap: 15px;

        div{
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${props => props.theme['gray-100']};
            font-size: 10px;

            svg{
                color: yellow;
            }

        }

        a{
            color: ${props => props.theme['gray-100']};
        }
    }
  }

`