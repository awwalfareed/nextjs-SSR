import React, { useEffect } from 'react'
import Post from '../component/Post'
import Image from 'next/image'
import styles from '../styles/Pages.module.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import Link from 'next/link'
import Data from './api/Data.json'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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


function WeatherData({ data }) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.name}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export async function getServerSideProps({ query }) {

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=fe76b79253bb187e0770847e4e07ed40`)
    const data = await res.json()

    return { props: { data } }
}

export default WeatherData;
