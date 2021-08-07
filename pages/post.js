import React from 'react'
import Post from '../component/Post'
import Image from 'next/image'
import styles from '../styles/Pages.module.css'
import Abs from '../public/images/Ab.jpg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';


const post = () => {
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
                        <h3 className={styles.post}>Post</h3>
                        <h3 className={styles.story}>Story</h3>
                        <h3 className={styles.story}>Igtv</h3>
                    </div>
                </div>
                <div className={styles.ntg}>
                    <h2 className={styles.popular}>Popular Celebrity Posts</h2>
                </div>
                <div className={styles.mov}>

                    <div className={styles.card}>
                        <div className={styles.nav}>
                            <Image src={Abs} className={styles.cardImg} width="70px" height="70px" />
                            <div className={styles.popu}>
                                <h4 className={styles.Ab}>Amitabh Bachchan</h4>
                                <h5 className={styles.sec}> 3 Sec ago.</h5>
                            </div>
                        </div>
                        <div className={styles.Abc}>
                            <Image src={Abs} className={styles.celebImg} width="500px" height="230px" />
                        </div>
                        <div className={styles.comm}>
                            <FavoriteBorderIcon className={styles.like} />
                            <span className={styles.num}>4566</span>
                            <ModeCommentOutlinedIcon className={styles.like} />
                            <span className={styles.num}>566</span>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.info1}>
                                # Repost <span className={styles.spn}>@ vkofficial</span><br />
                                As we embark on our new journey, aiming to <br />
                                empower each ans every individual and <br />
                                community, we strive to enrich lives.

                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.nav}>
                            <Image src={Abs} className={styles.cardImg} width="70px" height="70px" />
                            <div className={styles.popu}>
                                <h4 className={styles.Ab}>Amitabh Bachchan</h4>
                                <h5 className={styles.sec}> 3 Sec ago.</h5>
                            </div>
                        </div>
                        <div className={styles.Abc}>
                            <Image src={Abs} className={styles.celebImg} width="500px" height="230px" />
                        </div>
                        <div className={styles.comm}>
                            <FavoriteBorderIcon className={styles.like} />
                            <span className={styles.num}>4566</span>
                            <ModeCommentOutlinedIcon className={styles.like} />
                            <span className={styles.num}>566</span>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.info1}>
                                # Repost <span className={styles.spn}>@ vkofficial</span><br />
                                As we embark on our new journey, aiming to <br />
                                empower each ans every individual and <br />
                                community, we strive to enrich lives.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default post
