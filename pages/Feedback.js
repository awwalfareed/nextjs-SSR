import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import styles from '../styles/Feedback.module.css'
import Checkbox from '@material-ui/core/Checkbox'
import { useState } from 'react'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'left'
    },
    like: {
        width: '19%',
        height: '40px',
        border: '0.5px solid black',
        borderRadius: '0px',
        fontFamily: 'Encode Sans SC , sans-serif',
        zIndex: '-1'
    },
    txt: {
        width: '100%'
    },
    ugh: {
        width: '19%',
        height: '40px',
        border: '0.5px solid black',
        borderRadius: '0px',
        zIndex: '-1'
    }
});

const Feedback = () => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(trouble)
        console.log(feature)
        console.log(suggestion)
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [trouble, setTrouble] = useState('');
    const [feature, setFeature] = useState('');
    const [suggestion, setSuggestion] = useState('');
    // const [selectedNumber, setSelectedNumber] = useState(0);

    // const selectNumber = numberSelected => {
    //     setSelectedNumber(numberSelected)
    // }
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className={styles.main}>
                <h4 className={styles.headline} >Send Us Your Feedback!</h4>
                <div className={styles.feed}>
                    <h3 className={styles.text}>Name</h3>
                    <TextField className={classes.txt} required label="Tell Us.." value={name} onChange={(e) => setName(e.target.value)} />
                    <h3 className={styles.text}>Email</h3>
                    <TextField className={classes.txt} required label="Tell Us.." value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.feed}>
                    <h3 className={styles.text}>How easy was it use our website?</h3>
                    <div className={styles.poor}>
                        <h2 className={styles.text}>Poor</h2>
                        <h2 className={styles.text}>Excellent</h2>
                    </div>
                    <Button className={classes.like}>1</Button>
                    <Button className={classes.like}>2</Button>
                    <Button className={classes.like}>3</Button>
                    <Button className={classes.like}>4</Button>
                    <Button className={classes.like}>5</Button>
                </div>
                <div className={styles.feed}>
                    <h3 className={styles.text}>Are you having any trouble finding anything?</h3>
                    <div className={styles.exe}>
                        <Checkbox />
                        <h5 className={styles.text}>Yes</h5>
                    </div>
                    <div className={styles.exe}>
                        <Checkbox />
                        <h5 className={styles.text}>No</h5>
                    </div>
                    <TextField className={classes.txt} required label="Tell Us.." value={trouble} onChange={(e) => setTrouble(e.target.value)} />
                </div>
                <div className={styles.feed}>
                    <h3 className={styles.text}>Which important feature we should add?</h3>
                    <TextField className={classes.txt} required label="Tell Us.." value={feature} onChange={(e) => setFeature(e.target.value)} />
                </div>
                <div className={styles.feed}>
                    <h3 className={styles.text}>Any suggestion, you want give for making our <br /> website better?</h3>
                    <TextField className={classes.txt} required label="Tell Us.." value={suggestion} onChange={(e) => setSuggestion(e.target.value)} />
                </div>
                <div className={styles.feed}>
                    <h3 className={styles.text}>On a scale of 1-5, Give rating to our website?</h3>
                    <Button className={classes.ugh}>1</Button>
                    <Button className={classes.ugh}>2</Button>
                    <Button className={classes.ugh}>3</Button>
                    <Button className={classes.ugh}>4</Button>
                    <Button className={classes.ugh}>5</Button>
                </div>
                <div className={styles.feed}>
                    <div className={styles.exe}>
                        <Checkbox />
                        <h5 className={styles.text}>Im Not a robot</h5>
                    </div>
                </div>
                <Button className={classes.root} type="submit" onClick={handleSubmit} >Submit</Button>
            </div>
        </form>

    )
}

export default Feedback
