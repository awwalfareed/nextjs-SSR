import React, { useState, useEffect } from 'react'
import Axios from "axios";
import { Button } from '@material-ui/core';


export default function Hashid(props) {

    const [list, setList] = useState([]);
    const [id, setId] = useState("")
    const [query, setQuery] = useState('');

    const Getid = {
        method: 'GET',
        url: `https://graph.facebook.com/ig_hashtag_search?user_id=17841406993638186&q=${query}&access_token=${props.accesstoken}`,
    };

    Axios.request(Getid).then(function (response) {
        const data = response.data
        setId(data.data[0].id)
        console.log(data.data);
    }).catch(function (error) {
        console.error(error);
    });
    useEffect(() => {
        Axios({
            url: `https://graph.facebook.com/17841562924092473/top_media?user_id=17841406993638186&fields=id,media_type,comments_count,like_count,media_url,permalink,timestamp,caption,children&access_token=${props.accesstoken}`
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(query)

    }
    return (
        <div>
            {query}
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="type something" type="text" onChange={(e) => setQuery(e.target.value)} />
                    <Button type="submit">Search</Button>
                </form>
            </div>
            <div>
                {
                    list.map((posts) => {
                        return (
                            <div key={posts.id}>
                                <p>{posts.id}</p>
                                <img src={posts.media_url} alt="pictures" style={{
                                    width: "200px",
                                    height: "200px",
                                }} />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
