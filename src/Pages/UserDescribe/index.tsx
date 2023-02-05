import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { DefaultLayout } from '../../layouts/default'
import { UserDescribeContainer, UserNotFoundContainer, UserProfileAside, UserProfileBio, UserProfileContainer, UserProfileImage, UserProfileInfo, UserProfileMain, UserProfileName, UserProfileRepos } from './styles'
import { MdLocationCity, MdEmail, MdLocationPin, MdOutlineWeb } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import GhostImage from '../../assets/images/ghost.png'


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
             {userRepos !== undefined &&
                <UserDescribeContainer>
                    {userData.message !== 'Not Found' ?
                        <UserProfileContainer>

                            <UserProfileAside>

                                <UserProfileImage>
                                    <img src={userData.avatar_url} alt="avatar" />
                                </UserProfileImage>
                                <UserProfileName>{userData.name}</UserProfileName>
                                {userData.bio != null &&
                                    <UserProfileBio>
                                        {userData.bio}
                                    </UserProfileBio>
                                }

                            </UserProfileAside>

                            <UserProfileMain>

                                <UserProfileInfo>
                                    {userData.company != null && <span><MdLocationCity size={18} />{userData.company}</span>}
                                    {userData.location != null && <span> <MdLocationPin size={18} />{userData.location}</span>}
                                    {userData.email != null && <span> <MdEmail size={14} />{userData.email}</span>}
                                    {userData.blog != null && <span> <MdOutlineWeb size={14} />{userData.blog}</span>}
                                </UserProfileInfo>


                                <UserProfileRepos>
                                    {userRepos.map((repositories: any) => {
                                        return (
                                            <div className='repos_container' key={repositories.id}>
                                                <span>{repositories.name}</span>
                                                <div className='repos_info'>
                                                    {repositories.stargazers_count !== 0 &&
                                                        <div>
                                                            {repositories.stargazers_count}
                                                            <AiFillStar size={18} />
                                                        </div>
                                                    }
                                                    <a href={repositories.html_url}>
                                                        <FiExternalLink size={18} />
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </UserProfileRepos>

                            </UserProfileMain>

                        </UserProfileContainer>
                        :
                        <UserNotFoundContainer>
                            <img src={GhostImage} alt="" />
                            <h1>User Not Found</h1>
                        </UserNotFoundContainer>
                    }


                </UserDescribeContainer>
            } 
        </>

    )
}