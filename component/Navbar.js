import React from 'react'
import Header from './Header'
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';

export default function Navbar() {
    const [Shrink, setShrink] = useState(true)
    // const theme = useTheme();
    const useStyles = makeStyles((theme) => {
        return {

            list: {
                width: 250,
                // display:'none'
            },
            fullList: {
                width: 'auto',
            },
            button: {
                display: 'none',
                // backgroundColor: 'blue',
                [theme.breakpoints.down('xs')]: {
                    // backgroundColor: 'yellow',
                    display: 'block'
                }
            }
        }
    });

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Fiver Business', 'Explore', 'English', 'INR', 'Became a Seller'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Digital Marketing', 'Writing & Translation', 'Video & Animation', 'Music & Audio', 'Programming & Tech', 'Data'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
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
            if (window.scrollY >= 90) {
                setShrink(false)
            } else {
                setShrink(true)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, [])


    // const [activeBtn, setActiveBtn] = useState(false);
    return (
        <div className={`${styles.container} ${Shrink && styles.container_nav}`}>

            <div className={styles.col}>
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor} >
                        <Button onClick={toggleDrawer(anchor, true)} className={classes.button} ><MenuIcon /></Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}

                <div className={styles.main}>
                    <h2 className={styles.logo} >Fiverr.</h2>
                </div>
                <div className={styles.left}>
                    {data.map((item, i) => (
                        <h5 key={i} className={styles.text} id="menu"> {item.title} </h5>

                    ))}
                    <button className={styles.clc} >Join</button>
                    {/* < MoreVertIcon className={styles.hamburger} /> */}
                </div>
            </div>
            <Header />

        </div>
    )

}




