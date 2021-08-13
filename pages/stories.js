import React from 'react'
import styles from '../styles/Pages.module.css'
import Post from '../component/Post'
import Link from 'next/link'
import ReactPlayer from 'react-player';
// import Cars from '../public/video/cars.mp4'
import { CardMedia } from '@material-ui/core';

const Stories = () => {
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
                        <Link href="/">
                            <h3 className={styles.post}>Post</h3>
                        </Link>
                        <Link href="/stories">
                            <h3 className={styles.story ? styles.active : ""}>Story</h3>
                        </Link>
                        <h3 className={styles.story}>Igtv</h3>
                    </div>
                </div>
                <div className={styles.ntg}>
                    <h2 className={styles.popular}>Popular Celebrity Stories</h2>
                </div>
                <div className={styles.vid}  >
                    <ReactPlayer
                        url="https://player.vimeo.com/external/420239207.sd.mp4?s=2b5a6633c37af1a6fb0beb02c06bdc376fdfcce2&profile_id=165&oauth2_token_id=57447761"
                        type="mp4"
                        light
                        width="300px"
                        height="450px"
                        controls
                    />

                </div>

            </div>
        </div>
    )
}

export default Stories
