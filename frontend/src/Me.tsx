import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./styles.scss";

interface User {
  avatar: {
    url: string
  }
  name: {
    first: string
    last: string
  }
}

export const Me: React.FC = () => {
    const [userInfo, setUserInfo] = useState<User>({avatar: { url: '' }, name: { first: '', last: '' }});
    const [loggedInUser, setLoggedInUser] = useState<string>('')

    // Sets the logged in user by calling the user API and then using the id in the response to look up the user in the endpoint
    // that returns all the users. 
    useEffect(() => {
        const loggedInUrl = 'https://jonruna.github.io/tapi/me.json'
        const apiUrl = 'https://jonruna.github.io/tapi/userList.json'
        
        axios.get(loggedInUrl).then(response => {
            setLoggedInUser(response.data.userId)
        })

        axios.get(apiUrl).then(response => {
            const list = response.data.userList
            for (let index = 0; index < list.length; index++) {
                const user = list[index];
                if (user.id === loggedInUser) {
                    setUserInfo({avatar: {url: user.avatar.url}, name: { first: user.name.first, last: user.name.last }})
                }
            }
        })
    })

    return (
        <div className="me">
            <div>{userInfo.name.first} {userInfo.name.last}</div>
            <div><img alt="User avatar" src={userInfo.avatar.url} /></div>
        </div>
    )
}
