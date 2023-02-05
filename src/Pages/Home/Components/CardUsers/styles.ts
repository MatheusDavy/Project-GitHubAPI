import styled from "styled-components";

export const CardUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  height: 0px;
  width: 280px;
  background-color: transparent;
  border-radius: 20px;
  transition: 0.4s;
  cursor: pointer;

  div {
    width: 150px;
    height: 150px;
    position: relative;
    display: flex;
    transition: 0.4s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 125%;
      height: 125%;
      border-radius: 50%;
      background-color: ${(props) => props.theme["purple-500"]};
      opacity: 0.6;
      z-index: 0;
    }

    transform: translateY(40px);
  }

  p {
    font-weight: 600;
    color: ${(props) => props.theme["purple-500"]};
    font-size: 22px;
    transition: 0.4s;
    opacity: 0;
  }

  &:hover {
    height: 240px;
    width: 280px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px rgba(128, 128, 128, 0.301);

    div{
        transform: translateY(-40px);
    }
    p{
        opacity: 1;
    }
  }
`;
