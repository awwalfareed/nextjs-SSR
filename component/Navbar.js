import React from 'react'
import Header from './Header'
import LanguageIcon from '@material-ui/icons/Language';
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'sticky',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarTransparent: {
        backgroundColor: 'white',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    appBarSolid: {
        backgroundColor: 'rgba(211,211,211)',
        height: '100px'
    },
    hide: {

    }

}));

export default function Navbar() {
    const classes = useStyles()
    const [Shrink, setShrink] = useState("appBarTransparent")
    const navRef = React.useRef()
    navRef.current = Shrink

    const data = [
        {
            'id': '01',
            'title': 'Fiver Business'
        },
        {
            'id': '02',
            'title': 'Explore'
        },
        {
            'id': '03',
            'title': 'English'
        },
        {
            'id': '04',
            'title': 'INR'
        },
        {
            'id': '05',
            'title': 'Became a Seller'
        },
        {
            'id': '06',
            'title': 'Sign In'
        },
    ]


    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 90
            if (show) {
                setShrink('appBarSolid')
            } else {
                setShrink('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])



    return (
        <div className={classes.root}>

            <AppBar className={classes[navRef.current]}>
                <div className={styles.container}>
                    <div className={styles.col}>

                        <div className={styles.main}>
                            <h2 className={styles.logo} >Fiverr.</h2>
                        </div>
                        <div className={styles.left}>
                            {data.map((item, i) => (
                                <h5 key={i} className={styles.text}> {item.title} </h5>

                            ))}
                            <button className={styles.clc} >Join</button>
                        </div>
                    </div>
                    <Header />
                </div>
            </AppBar>

        </div>
    )

}




