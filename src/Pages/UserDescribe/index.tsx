import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserDescribeContainer} from './styles'
import { NotFound } from './Components/NotFound'
import { UserDescription } from './Components/UserDescriptions'
import CanvasBackground from '../../Components/Background'



export function UserDescribe() {
    const { userId } = useParams()

    const [userData, setUserData] = useState<any>()
    const [userRepos, setUserRepos] = useState<any>()


    useEffect(() => {

        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then((response) => setUserData(response))

        fetch(`https://api.github.com/users/${userId}/repos`)
            .then(response => response.json())
            .then((response) => setUserRepos(response))

    }, [userId])

    return (

        <>
            <CanvasBackground />
             {userRepos !== undefined &&
                <UserDescribeContainer>
                    {userData.message !== 'Not Found' ?
                        <UserDescription 
                            avatar_url={userData.avatar_url}
                            name={userData.name}
                            bio={userData.bio}
                            company={userData.company}
                            location={userData.location}
                            email={userData.email}
                            blog={userData.blog}
                            repos={userRepos}
                        />
                        :
                        <NotFound />
                    }

                </UserDescribeContainer>
            }             
        </>

    )
}