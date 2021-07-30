import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import styles from '../styles/Feedback.module.css'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        //   justifyContent:'flex-end'
        alignItems: 'left'
    },
    like: {
        width: '20%',
        height: '30px',
        borderLeft: '0.5px solid black',
        borderRight: '1px solid black'
    }
});

const Feedback = () => {
    const classes = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h3 className={styles.send}>Send Us Your Feedback!</h3>
            </div>
            <div className={styles.txtfield}>
                <h5 className={styles.add}>Name</h5>
                <TextField className={styles.name} />
                <h5 className={styles.add}>Email</h5>
                <TextField className={styles.name} />
            </div>
            <div className={styles.txtfield}>
                <h4 className={styles.easy}>How easy was it use our website?</h4>
                <div className={styles.poor}>
                    <h3 className={styles.exc}>Poor</h3>
                    <h3 className={styles.exc}>Excellent</h3>
                </div>

                <Button className={classes.like}>1</Button>
                <Button className={classes.like}>2</Button>
                <Button className={classes.like}>3</Button>
                <Button className={classes.like}>4</Button>
                <Button className={classes.like}>5</Button>

            </div>
            <div className={styles.txtfield}>
                <h3 className={styles.add}>Are you having trouble finding anything?</h3>
                <div className={styles.check}>
                    <div className={styles.checkk}>
                        <Checkbox className={styles.yes} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} >
                        </Checkbox>
                        <h5 className={styles.easy}>Yes</h5>
                    </div>
                    <div className={styles.checkk}>
                        <Checkbox className={styles.yes} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} >
                        </Checkbox>
                        <h5 className={styles.easy}>No</h5>
                    </div>
                    <TextField className={styles.name} label="Tell us.." />
                </div>
            </div>
            <div className={styles.txtfield}>
                <h5 className={styles.add}>Which important feature we should add?</h5>
                <TextField className={styles.name} label="Tell us.." />
            </div>
            <div className={styles.txtfield}>
                <h5 className={styles.add}>Any suggestion, you want give for making our <br /> website better?</h5>
                <TextField className={styles.name} label="Tell us.." />
            </div>
            <div className={styles.txtfield}>
                <h5 className={styles.add}>On scale of 1 - 10, Give rating to our website?</h5>
                <div className={styles.buf}>
                    <Button className={styles.ugy}>1</Button>
                    <Button className={styles.ugy}>2</Button>
                    <Button className={styles.ugy}>3</Button>
                    <Button className={styles.ugy}>4</Button>
                    <Button className={styles.ugy}>5</Button>
                    <Button className={styles.ugy}>6</Button>
                    <Button className={styles.ugy}>7</Button>
                    <Button className={styles.ugy}>8</Button>
                    <Button className={styles.ugy}>9</Button>
                    <Button className={styles.ugy}>10</Button>
                </div>
            </div>
            <div className={styles.checkk}>
                <Checkbox className={styles.yes} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} >
                </Checkbox>
                <h5 className={styles.easy}>I'm not a robot</h5>
            </div>
            <Button className={classes.root}>Submit</Button>
        </div>
    )
}

export default Feedback
