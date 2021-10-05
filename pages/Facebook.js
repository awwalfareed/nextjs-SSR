import React, { useState } from 'react'
import axios from "axios";


// if (sessionStorage.getItem('token')) {
//     const user = JSON.parse(sessionStorage.getItem('token'));
//     console.log(user())
// }

    export default function Facebook(props) {
        const [id, setId] = useState("");
        const [username, setUsername] = useState("");
        const [Name, setName] = useState("");
        const [biography, setBiography] = useState("");
        const [followers, setFollowers] = useState("");
        const [follow, setFollow] = useState("");
        const [profile, setProfile] = useState("");


        const options = {
            method: 'GET',
            url: `https://graph.facebook.com/v11.0/17841406993638186?fields=followers_count,follows_count,id,ig_id,media_count,name,profile_picture_url,username,biography&access_token=${props.accesstoken}`,
        };

        axios.request(options).then(function (response) {
            // console.log(response.data);
            setId(response.data.id)
            setUsername(response.data.username)
            setName(response.data.name)
            setBiography(response.data.biography)
            setFollow(response.data.follows_count)
            setFollowers(response.data.followers_count)
            setProfile(response.data.profile_picture_url)
        }).catch(function (error) {
            // console.error(error);
        });
        return (
            <div>
                <img src={profile} alt="picture" style={{
                    width: "50px",
                    height: "50px",
                }} />
                <h2>Username:{username}</h2>
                <h2>Name:{Name}</h2>
                <h2>Id:{id}</h2>
                <h2>Biography:{biography}</h2>
                <h2>Followers:{followers}</h2>
                <h2>Follows:{follow}</h2>
            </div>
        )
    }
