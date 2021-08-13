import React from 'react'
import Image from 'next/image'
import styles from '../styles/Pages.module.css'
import Celeb from '../public/images/celeb.jpg'
import Kpop from '../public/images/kpop.png'
import Meme from '../public/images/memes.jpg'
import Singer from '../public/images/singer.jpg'
import Athlete from '../public/images/atheles.jpg'
import Ipl from '../public/images/ipl.jpg'
import Holly from '../public/images/hollywood.jpg'
import Buss from '../public/images/bussiness.jpg'

const Post = () => {
    return (
        <div className={styles.celeb}>
            <div className={styles.divde}>
                <div className={styles.bg}>
                    <Image src={Celeb} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>CELEBRITY</h5>
            </div>
            <div className={styles.divde}>
                <div className={styles.bg}>
                    <Image src={Kpop} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>K-POP</h5>
            </div>
            <div className={styles.divde}>
                <div className={styles.bg}>
                    <Image src={Meme} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>MEMES</h5>
            </div>
            <div className={styles.divde}>
                <div className={styles.bg}>
                    <Image src={Singer} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>SINGER</h5>
            </div>
            <div className={styles.aft}>
                <div className={styles.bg}>
                    <Image src={Athlete} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>ATHELETES </h5>
            </div>
            <div className={styles.aft}>
                <div className={styles.bg}>
                    <Image src={Ipl} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>IPL</h5>
            </div>
            <div className={styles.aft}>
                <div className={styles.bg}>
                    <Image src={Holly} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>HOLLYWOOD</h5>
            </div>
            <div className={styles.aft}>
                <div className={styles.bg}>
                    <Image src={Buss} alt="Celebrity" className={styles.cel} height="65px" width="65px" />
                </div>
                <h5 className={styles.title}>BUSSINESS</h5>
            </div>
        </div>

    )
}

export default Post
