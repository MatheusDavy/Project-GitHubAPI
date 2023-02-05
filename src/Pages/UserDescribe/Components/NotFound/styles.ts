import styled from "styled-components";

// User Not Found
export const UserNotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;

  min-height: 80vh;
  width: 90%;
  max-width: 1080px;

  padding-top: 150px;

  margin: 0 auto;

  img{
    width: 200px;
    height: auto;
    animation-name: GhostAnimation;
    animation-iteration-count: infinite;
    animation-duration: 20s;
  }

  @keyframes GhostAnimation {
    0%{transform: translate(0px, -20px)}
    50%{transform: translate(-0px, 20px)}
    100%{transform: translate(0px, -20px)}
  }

  h1{
    font-size: 20px;
  }

`