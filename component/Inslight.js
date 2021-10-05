import React, { useState, useEffect } from 'react'
import Axios from "axios";
// import axios from "axios";


export default function Inslight(props) {

    const [list, setList] = useState([]);
    useEffect(() => {
        Axios({
            url: `https://graph.facebook.com/17841406993638186/insights?metric=impressions,reach,profile_views&period=day&access_token=${props.accesstoken}`
        })
            .then(response => {
                const data = response.data
                // console.log(data.data)
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
