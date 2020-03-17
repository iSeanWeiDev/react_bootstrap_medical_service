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
            minHeight: "150px"
        },
        img: {
            width: "20px",
            position: "absolute",
            top: "5px",
            right: "5px"
        },
        value: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "30px",
            fontWeight: "900"
        },
        text: {
            position: "absolute",
            bottom: "0px",
            left: "10px",
            color: "#43747c",
            fontSize: "10x",
            fontWeight: "900"
        }
    }));
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="/assets/imgs/icon5.png" alt="icon5" className={classes.img} />
            <span className={classes.value}>{value}</span>
            <p className={classes.text}>{text}</p>
        </div>
    )
}
export default ProfileCard;