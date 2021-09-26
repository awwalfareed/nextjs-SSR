import React, { useState } from 'react'
import axios from "axios";


export default function Follower(props) {
    const [username, setUsername] = useState("");
    const [Name, setName] = useState("");
    const [biography, setBiography] = useState("");
    const [followers, setFollowers] = useState("");
    const [follow, setFollow] = useState("");
    // const options = {
    //     method: 'GET',
    //     url: `https://graph.facebook.com/v11.0/17841406993638186?fields=business_discovery.username(https.viren){followers_count,media_count,media{comments_count,like_count},username,name,biography}&access_token=${props.accesstoken}`,
    // };

    // axios.request(options).then(function (response) {
    //     // console.log(response.data);
    //     setUsername(response.data.business_discovery.username)
    //     setName(response.data.business_discovery.name)
    //     setBiography(response.data.business_discovery.biography)
    //     setFollowers(response.data.business_discovery.followers_count)
    // }).catch(function (error) {
    //     console.error(error);
    // });
    return (
        <div>
            {/* <h2>Username:{username}</h2>
            <h2>Name:{Name}</h2>
            <h2>Biography:{biography}</h2>
            <h2>Followers:{followers}</h2> */}
            {/* <h2>Id:{id}</h2> */}
            {/* <h2>Follows:{follow}</h2> */}
        </div>
    )
}
