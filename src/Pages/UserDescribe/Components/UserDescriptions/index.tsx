import { AiFillStar } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"
import { MdEmail, MdLocationCity, MdLocationPin, MdOutlineWeb } from "react-icons/md"
import { UserProfileAside, UserProfileBio, UserProfileContainer, UserProfileImage, UserProfileInfo, UserProfileMain, UserProfileName, UserProfileRepos } from "./styles"


interface UserDescriptionProps {
    avatar_url: string
    name: string
    company: string
    bio: string
    location: string
    email: string
    blog: string
    repos: Object[]
}


export function UserDescription({avatar_url, name, company, bio, location, email, blog, repos}: UserDescriptionProps) {
    return (
        <UserProfileContainer>

            <UserProfileAside>

                <UserProfileImage>
                    <img src={avatar_url} alt="avatar" />
                </UserProfileImage>
                <UserProfileName>{name}</UserProfileName>
                {bio != null && bio != '' &&
                    <UserProfileBio>
                        {bio}
                    </UserProfileBio>
                }

            </UserProfileAside>

            <UserProfileMain>

                <UserProfileInfo>
                    {company != null && company != '' && <span><MdLocationCity size={18} />{company}</span>}
                    {location != null && location != '' && <span> <MdLocationPin size={18} />{location}</span>}
                    {email != null && email != '' && <span> <MdEmail size={14} />{email}</span>}
                    {blog != null && blog != '' && <span> <MdOutlineWeb size={14} />{blog}</span>}
                </UserProfileInfo>


                <UserProfileRepos>
                    {repos.map((repositories: any) => {
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
    )
}