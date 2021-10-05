import React, { useState, useEffect } from 'react'
import axios from "axios";
// import Hashid from './HashId';

export default function GetId(props) {
    const [id, setId] = useState([]);
    const [list, setList] = useState([]);
    const [query, setQuery] = useState("");

    const handleQuery = (event) => {
        const search = event.target.value;
        setQuery(search);
        // console.log(search);
    }
    const Getid = {
        method: 'GET',
        url: `https://graph.facebook.com/ig_hashtag_search?user_id=17841406993638186&q=${query}&access_token=${props.accesstoken}`,
    };

    axios.request(Getid).then(function (response) {
        const data = response.data
        setId(data.data[0].id)
        // console.log(data.data[0].id);
    }).catch(function (error) {
        console.error(error);
    });

    useEffect(() => {
        axios({
            url: `https://graph.facebook.com/${id}/top_media?user_id=17841406993638186&fields=id,media_type,comments_count,like_count,media_url,permalink,timestamp,caption,children&access_token=${props.accesstoken}`
        })
            .then(response => {
                const data = response.data
                setList(data.data)
                console.log(data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [setList]);

    return (
        <div>
            <form >
                <input type="text" value={query} onChange={handleQuery} />
            </form>
            {
                list.map((posts) => {
                    return (
                        <div key={posts.id}>
                            <p>id:{posts.id}</p>
                            <p>caption:{posts.caption}</p>
                            <p>comments:{posts.comments_count}</p>
                            <p>likes:{posts.like_count}</p>
                            <p>timestamp:{posts.timestamp}</p>
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
