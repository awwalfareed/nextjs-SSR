import React, { useState, useEffect } from 'react'
import Axios from "axios";
// import axios from "axios";


export default function Inslight(props) {

    const [list, setList] = useState([]);
    useEffect(() => {
        Axios({
            url: `https://graph.facebook.com/${props.userId}/insights?metric=impressions,reach,profile_views&period=day&access_token=${props.accesstoken}`
        })
            .then(response => {
                const data = response.data
                console.log(response.data)
                console.log(list.length)
                console.log(data.data.length)
                setList(data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [setList]);

    return (
        <div>
            <div>
                {
                    list.map((posts) => {
                        return (
                            <div key={posts.id}>
                                <p>{posts.id}</p>
                                <p>{posts.title}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
