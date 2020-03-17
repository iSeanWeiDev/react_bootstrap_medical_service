import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const Button = ({
    title,
    onPress
}) => {
    const useStyles = makeStyles(theme => ({
        button: {
            color: "white",
            fontWeight: "900",
            background: "#43747c",
            border: "#43747c",
            padding: "10px",
            width: "200px",
            cursor: "pointer"
        },
    }));
    const classes = useStyles();
    return (
        <button className={classes.button} onClick={onPress} >{title}</button>
    )
}
export default Button;