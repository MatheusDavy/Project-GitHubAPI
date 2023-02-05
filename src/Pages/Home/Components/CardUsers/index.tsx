import { useEffect, useState } from "react";
import { personDatas } from "../../../../assets/data/person";
import { CardUserContainer } from "./styles";

export function CardUsersLooping() {
    const [userDatas, setUserDatas] = useState(personDatas)
    const [loppingIndex, setLoopingIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            loppingIndex < userDatas.length - 1 ? setLoopingIndex(prev => prev + 1) : setLoopingIndex(0)
        }, 2000)
    }, [loppingIndex])

    return (
        <CardUserContainer id="looping-card-animation">
            <div>
                <img src={userDatas[loppingIndex].image} alt="" />
            </div>
            <p>{userDatas[loppingIndex].name}</p>
        </CardUserContainer>
    )
}