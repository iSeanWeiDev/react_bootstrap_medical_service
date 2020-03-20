import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const ProfileCard = ({
    value,
    text
}) => {
    const useStyles = makeStyles(theme => ({
        container: {
            border: "1px solid #43747c",
            position: "relative",
            minHeight: "160px",
            border: '2px solid #c3cfd9',
            borderRadius: '3px',
            textAlign: 'center',
            fontFamily: "'Roboto', 'sans-serif'",
        },
        img: {
            width: "30px",
            height: "30px",
            position: "absolute",
            top: "7px",
            right: "7px"
        },
        value: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#293845",
            fontSize: "35px",
            letterSpacing: '1px',
            fontWeight: "400"
        },
        text: {
            position: "absolute",
            bottom: "17px",
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: "center",

        },
        content: {
            color: "#1aae9f",
            fontSize: "12.5x",
            fontWeight: "600",
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="/assets/imgs/icon5.png" alt="icon5" className={classes.img} />
            <div className={classes.value}>{value}</div>
            <div className={classes.text}>
                <span className={classes.content}>
                    {text}
                </span>
            </div>
        </div>
    )
}
export default ProfileCard;