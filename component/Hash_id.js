import React, { useState, useEffect } from 'react'
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
// import ReactPlayer from 'react-player';


export default function Hashid() {
    const [post, setPost] = useState("")
    const [accessToken, setAccessToken] = useState("");
    // const options = {
    //     method: 'GET',
    //     url: `https://graph.facebook.com/ig_hashtag_search?user_id=17841406993638186&q=reels&access_token=${props.accesstoken}`,
    // };
    // axios.request(options).then(function (response) {
    //     // console.log(response.data);

    // }).catch(function (error) {
    //     // console.error(error);
    // });
    // const media = {
    //     method: 'GET',
    //     url: `https://graph.facebook.com/17843847901054903/recent_media?user_id=17841406993638186&fields=id,media_type,comments_count,like_count,media_url,permalink,
    //     timestamp,caption,children&access_token=${props.accesstoken}`,
    // };
    // axios.request(media).then(function (response) {
    //     // console.log(response.data);
    // }).catch(function (error) {
    //     // console.error(error);
    // });
    const topmedia = {
        method: 'GET',
        url: `https://graph.facebook.com/17843847901054903/top_media?user_id=17841406993638186&fields=id,media_type,comments_count,like_count,media_url,permalink,
            timestamp,caption,children&access_token=${accessToken}`,
    };
    axios.request(topmedia).then(function (response) {
        console.log(response.data);
        setPost(response.data)
        console.log("post" + post)
    }).catch(function (error) {
        // console.error(error);
    });

    // const search = {
    //     method: 'GET',
    //     url: `https://graph.facebook.com/17841406993638186/recently_searched_hashtags?fields=id,name&access_token=${props.accesstoken}`,
    // };
    // axios.request(search).then(function (response) {
    //     // console.log(response.data);
    // }).catch(function (error) {
    //     // console.error(error);
    // });
    const componentClicked = data => {
        // console.log("data", data)
    }
    const responseFacebook = response => {
        // console.log(response)
        setAccessToken(response.accessToken)
    }
    return (
        <div>
            <FacebookLogin
                appId="557380755473889"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
        </div >
    )
}
