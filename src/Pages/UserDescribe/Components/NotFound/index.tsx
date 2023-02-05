import { UserNotFoundContainer } from "./styles";
import GhostImage from '../../../../assets/images/ghost.png'

export function NotFound(){
    return(
        <UserNotFoundContainer>
                            <img src={GhostImage} alt="" />
                            <h1>User Not Found</h1>
                        </UserNotFoundContainer>
    )
}