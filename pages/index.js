import React, { useState, useEffect } from "react";
import Axios from "axios";
import Post from '../component/Post'
// import Image from 'next/image'
import styles from '../styles/Pages.module.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import Link from 'next/link'
// import Data from './api/Data.json'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        // height: "400px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function Index() {
    const classes = useStyles();
    const [list, setList] = useState([]);
    useEffect(() => {
        Axios({
            url: "https://jsonplaceholder.typicode.com/photos"
        })
            .then(response => {
                setList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setList]);

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.label}>
                    <h3 className={styles.exp}>Explore Space</h3>
                    <h3 className={styles.mor}>MORE SPACE+</h3>
                </div>
                <div>
                    <Post />
                </div>
                <div className={styles.tab}>
                    <div className={styles.tab1}>
                        <Link href="/post">
                            <h3 className={styles.post ? styles.active : ""}>Post</h3>
                        </Link>
                        <Link href="/stories">
                            <h3 className={styles.story}>Story</h3>
                        </Link>
                        <h3 className={styles.story}>Igtv</h3>
                    </div>
                </div>
                <div className={styles.ntg}>
                    <h2 className={styles.popular}>Popular Celebrity Posts</h2>
                </div>
                <div className={styles.mov}>
                    {list.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <Card className={classes.root}>
                                {/* <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar} src={item.image} />


                                    }
                                    title={item.name}
                                    subheader={item.time}
                                />*/}
                                <CardMedia
                                    className={classes.media}
                                    component="img"
                                    image={item.thumbnailUrl}
                                />
                                {/* <div className={styles.comm}>
                                    <FavoriteBorderIcon className={styles.like} />
                                    <span className={styles.num}>4566</span>
                                    <ModeCommentOutlinedIcon className={styles.like} />
                                    <span className={styles.num}>566</span>
                                </div> */}
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
