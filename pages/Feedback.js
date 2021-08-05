import { Button, RadioGroup, TextField, Radio, Typography, FormHelperText } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import styles from '../styles/Feedback.module.css'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useForm } from "react-hook-form";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
// import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'left'
    },
    like: {
        width: '20%',
        height: '40px',
        // color:'black',
        border: '0.5px solid black',
        borderRadius: '0px',
        fontFamily: 'Encode Sans SC , sans-serif',
        // zIndex: '-1'
    },
    txt: {
        width: '100%'
    },
    ugh: {
        width: '19%',
        height: '40px',
        border: '0.5px solid black',
        borderRadius: '0px',
        // zIndex: '-1'
    },
    rate: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
    rate: {
        display: "flex",
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "40px",
        backgroundColor: "blue"
    }
});



const Feedback = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(2);

    const { register, handleSubmit, watch, formState: { errors }, reset, trigger } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    const [clicked, setClicked] = useState();
    const handleClick = id => {
        setClicked({ [id]: true })
        console.log(clicked)
    }

    // const [rating, setRating] = useState();
    // const handleRating = id => {
    //     setRating({ [id]: true })
    //     console.log(rating)
    // }
    return (
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.main}>
                <div className={styles.containe}>
                    <div className={styles.head}>
                        <h4 className={styles.headline} >Send Us Your Feedback!</h4>
                    </div>
                    <div className={styles.feed}>
                        <h3 className={styles.text}>Name</h3>
                        <TextField className={classes.txt} variant="outlined" {...register("name", { required: "Name is required" })} />
                        {errors.name && (<small>{errors.name.message}</small>)}
                        <h3 className={styles.text}>Email</h3>
                        <TextField className={classes.txt} variant="outlined" {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i,
                                message: "Invalid Email Address"
                            }
                        })}
                            onKeyUp={() => {
                                trigger("email")
                            }}
                        />
                        {errors.email && (<small>{errors.email.message}</small>)}

                    </div>
                    <div className={styles.feed}>
                        <h3 className={styles.text}>How easy was it use our website?</h3>
                        <div className={styles.poor}>
                            <h2 className={styles.text}>Poor</h2>
                            <h2 className={styles.text}>Excellent</h2>
                        </div>
                        <Button className={classes.like} onClick={() => handleClick("1")} >1</Button>
                        <Button className={classes.like} onClick={() => handleClick("2")}>2</Button>
                        <Button className={classes.like} onClick={() => handleClick("3")}>3</Button>
                        <Button className={classes.like} onClick={() => handleClick("4")}>4</Button>
                        <Button className={classes.like} onClick={() => handleClick("5")}>5</Button>
                    </div>
                    <div className={styles.feed}>
                        <h3 className={styles.text}>Are you having any trouble finding anything?</h3>
                        <RadioGroup coloum="true">
                            <FormControlLabel
                                value="Yes"
                                control={<Radio inputRef={{ ...register("yes") }} />}
                                label="yes"
                            />
                            <FormControlLabel value="No" control={<Radio inputRef={{ ...register("no") }} />} label="No" />
                        </RadioGroup>
                        <TextareaAutosize aria-label="empty textarea" minRows={3} placeholder="Tell Us.." {...register("trouble")} />
                    </div>
                    <div className={styles.feed}>
                        <h3 className={styles.text}>Which important feature we should add?</h3>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Tell Us.." {...register("important", { required: " * required" })} />
                        {errors.important && (<small>{errors.important.message}</small>)}

                    </div>
                    <div className={styles.feed}>
                        <h3 className={styles.text}>Any suggestion, you want give for making our <br /> website better?</h3>
                        <TextareaAutosize aria-label="empty textarea" placeholder="Tell Us.." {...register("suggestion", { required: " * required" })} />
                        {errors.suggestion && (<small>{errors.suggestion.message}</small>)}

                    </div>
                    {/* <div className={styles.feed}>
                        <h3 className={styles.text}>On a scale of 1-5, Give rating to our website?</h3>
                        <Button className={classes.ugh} >1</Button>
                        <Button className={classes.ugh} >2</Button>
                        <Button className={classes.ugh} >3</Button>
                        <Button className={classes.ugh} >4</Button>
                        <Button className={classes.ugh} >5</Button>
                    </div> */}
                    <Button className={classes.root} type="submit" >Submit</Button>
                </div>
            </div>
        </form >

    )
}

export default Feedback
