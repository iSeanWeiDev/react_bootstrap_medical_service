import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid
} from "@material-ui/core";
import { withRouter } from "react-router";
import Button from '../components/Button'

const useStyles = makeStyles(theme => ({
    startup: {
        flexGrow: 1,
        width: "1000px",
        margin: "auto"
    },
    leftLayout: {
        padding: '2rem',
    },
    img: {
        position: 'relative',
        width: '80%',
        float: 'right',
        minHeight: '360px',
        minWidth: '310px',
        display: 'flex',
    },
    rightLayout: {
        fontFamily: "'Roboto', 'sans-serif'",
    },
    title: {
        fontSize: '36px',
        fontWeight: 500,
        color: "#293845",
        width: "100%",
    },
    subTitle: {
        paddingLeft: '20%',
        fontSize: '36px',
        fontWeight: 400,
        color: "#293845",
        width: "100%",
    },
    contents: {
        paddingLeft: '10%',
        fontSize: '18px',
        fontWeight: 400,
        color: "#293845",
        width: "100%",
    },
    btnGetStarted: {
        color: "white",
        // background: !authButton ? "#43747c" : disabled ? "#777" : "#43747c",
        background: '#1aae9f',
        width: '350px',
        height: '50px',
        borderRadius: '5px',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '21px',
        fontWeight: 400,
        cursor: "pointer",
        outline: "none",
        border: 'none',
    }
}));
function Startup({
    isAuthenticated,
    history
}) {
    const classes = useStyles();
    return (
        <div className={classes.startup}>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={4}>
                    <div className={classes.leftLayout}>
                        <img className={classes.img} src="/assets/imgs/desk.png" alt="desk" />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.rightLayout}>
                        <div className={classes.title}>
                            <p>Rapidly pre-screen for COVID-19</p>
                        </div>
                        <div className={classes.subTitle}>
                            <p>AI powered respiratory<br /> symptom assessments</p>
                        </div>
                        
                        <div className={classes.contents}>
                            <p>Obtain a pre-screening assessment and check <br />your symptoms with a few simple questions</p>
                            <Button
                                style={classes.btnGetStarted} 
                                title="Get Started" 
                                onPress={()=>isAuthenticated ? history.push("/home") : history.push("/login")} authButton={false} 
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default withRouter(Startup);