import { CardUsersLooping } from "./Components/CardUsers"
import { HomeBannerContainer, HomeContainer, TittleBannerContainer } from "./styles"
import {BsLink45Deg} from 'react-icons/bs'


export function Home() {
    return (
        <HomeContainer>
            <HomeBannerContainer>
                
                <TittleBannerContainer >
                    <h1 className="text-banner-animation">Search for your user or someone else user on github</h1>
                    <a href="" className="text-banner-animation">
                       <span>REPOSITORE</span> <BsLink45Deg size={20} />
                    </a>
                </TittleBannerContainer>

                <CardUsersLooping />

            </HomeBannerContainer>

        </HomeContainer>
    )
}