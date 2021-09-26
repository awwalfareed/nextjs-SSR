import React from 'react'
import axios from "axios";

export default function Inslight(props) {
    const inslight = {
        method: 'GET',
        url: `https://graph.facebook.com/17841406993638186/insights?metric=impressions,reach,profile_views&period=day&access_token=${props.accesstoken}`,
    };
    axios.request(inslight).then(function (response) {
        // console.log(response.data);
    }).catch(function (error) {
        // console.error(error);
    });

    return (
        <div>
            
        </div>
    )
}
