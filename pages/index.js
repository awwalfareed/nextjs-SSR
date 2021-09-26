import React, { useState, useEffect } from "react";
import Axios from "axios";
import Post from '../component/Post'
import styles from '../styles/Pages.module.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
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
            url: "https://jsonplaceholder.typicode.com/posts"
        })
            .then(response => {
                setList(response.data);
                console.log(response.data)
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
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <Link as={`/${item.id}`} href="/[id]" >
                                            <a>
                                                {item.title}
                                            </a>
                                        </Link>
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
