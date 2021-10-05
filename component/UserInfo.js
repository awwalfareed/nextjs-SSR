import React, { useState } from 'react'
import axios from "axios";


export default function UserInfo() {
    const [id, setId] = useState([])

    const Getid = {
        method: 'GET',
        url: `https://graph.facebook.com/17841448873146611/media?fields=id,caption,comments_count,like_count,media_type,permalink,thumbnail_url,video_title,media_product_type,media_url,timestamp,owner,ig_id,is_comment_enabled,shortcode,username,children,comments&access_token=EAAZBZBDy4ZBMSsBAGnCoIHglO0fbA4XNUAVvrAZCeCgVFTBX3OxMB6tEMx1OQPTsZCAYhmwZAvWkG9oWrGgNMu8ZB9c8CGlZAKf1KOK8W058v5EusMbjqdq2Lb89eT8G0FReiTv5lYqPecP4uakPnRytYZCHOutAUATaVJQEAO74guQZDZD`,
    };

    axios.request(Getid).then(function (response) {
        const data = response.data
        setId(data.data)
        // console.log(data.data);
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div>
            {
                id.map((posts) => {
                    return (
                        <div key={posts.id}>
                            <p>usernaame:{posts.username}</p>
                            <p>caption:{posts.caption}</p>
                            <p>comment:{posts.comments_count}</p>
                            <p>like:{posts.like_count}</p>
                            <p>timestamp:{posts.timestamp}</p>
                            <p>shortcode:{posts.shortcode}</p>
                            <img src={posts.media_url} alt="pictures" style={{
                                width: "200px",
                                height: "200px",
                            }} />
                        </div>
                    )
                })
            }
        </div>
    )
}
