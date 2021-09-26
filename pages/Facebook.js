import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import Image from 'next/image';
import Follower from '../component/Follower';
import Hashid from '../component/Hash_id';
import Inslight from '../component/Inslight';


export default function Facebook() {

    const [accessToken, setAccessToken] = useState("");
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [Name, setName] = useState("");
    const [biography, setBiography] = useState("");
    const [followers, setFollowers] = useState("");
    const [follow, setFollow] = useState("");
    const [profile, setProfile] = useState("");

    const componentClicked = data => {
        // console.log("data", data)
    }
    const responseFacebook = response => {
        // console.log(response)
        setAccessToken(response.accessToken)
    }
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/v11.0/17841406993638186?fields=followers_count,follows_count,id,ig_id,media_count,name,profile_picture_url,username,biography&access_token=${accessToken}`,
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
            <center>
                <h2>Username:{username}</h2>
                <h2>Name:{Name}</h2>
                <h2>Id:{id}</h2>
                <h2>Biography:{biography}</h2>
                <h2>Followers:{followers}</h2>
                <h2>Follows:{follow}</h2>
                <h3>bussiness discovery </h3>
                <Follower accesstoken={accessToken} />
                {/* <Hashid accesstoken={accessToken} /> */}
                <Inslight accesstoken={accessToken} />
            </center>
            <br />
            <FacebookLogin
                appId="557380755473889"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
        </div>
    )
}
