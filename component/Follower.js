import React, { useState } from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

export default function Follower(props) {
    const [username, setUsername] = useState("");
    const [image, setImage] = useState([]);
    const [result, setResult] = useState([]);
    const [Name, setName] = useState("");
    const [biography, setBiography] = useState("");
    const [followers, setFollowers] = useState("");
    const [follow, setFollow] = useState("");
    const [query, setQuery] = useState("");
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleQuery = (event) => {
        const search = event.target.value;
        setQuery(search);
        console.log(search);
    }
    const options = {
        method: 'GET',
        url: `https://graph.facebook.com/v11.0/${props.userId}?fields=business_discovery.username(${query}){followers_count,follows_count,media_count,media{comments_count,like_count,media_url,caption,media_product_type,media_type,timestamp},username,name,biography,profile_picture_url}&access_token=${props.accesstoken}`,
    };
    // ${props.userId}
    axios.request(options).then(function (response) {
        // console.log(response.data.business_discovery.media.data);
        setResult(response.data.business_discovery.media.data)
        // console.log(response.data.business_discovery);
        setUsername(response.data.business_discovery.username)
        setName(response.data.business_discovery.name)
        setBiography(response.data.business_discovery.biography)
        setFollowers(response.data.business_discovery.followers_count)
        setFollow(response.data.business_discovery.follows_count)
        setImage(response.data.business_discovery.profile_picture_url)
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div >
            <form >
                <input type="text" value={query} onChange={handleQuery} />
            </form>
            <div style={{
                        width: "200px",
                        height: "200px",
                        borderRadius:"50%",
                        backgroundColor:"blue",
                    }}>
                <CardMedia
                    component="img"
                    image={image}
                   
                />
            </div>
            <br />
            <p>Username:{username}</p>
            <p>Name:{Name}</p>
            <p>Biography:{biography}</p>
            <p>Followers:{followers}</p>
            <p>Follow:{follow}</p>
            {
                result.map((posts) => (
                    <div key={posts.id} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar alt="userprofile" src={image} />
                                }
                                title={username}
                                subheader={posts.timestamp}
                            />
                            <CardMedia
                                component="img"
                                height="250"
                                image={posts.media_url}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {posts.caption}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon /><span>{posts.like_count}</span>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ModeCommentIcon /><span>{posts.comments_count}</span>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}
