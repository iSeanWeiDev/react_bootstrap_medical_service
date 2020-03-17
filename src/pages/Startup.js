import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid
} from "@material-ui/core";
import { withRouter } from "react-router";
import Button from '../components/Button'

const useStyles = makeStyles(theme => ({
    startup: {
        flexGrow: 1
    },
    leftLayout: {

    },
    img: {

    },
    rightLayout: {

    }
}));
function Startup({
    history
}) {
    const classes = useStyles();
    return (
        <div className={classes.startup}>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={3}>
                    <div className={classes.leftLayout}>
                        <img className={classes.img} src="/assets/imgs/desk.png" alt="desk" />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className={classes.rightLayout}>
                        <h1>Rapidly pre-screen for COVID-19</h1>
                        <h1>AI powered respiratory symptom assessments</h1>
                        <p>Obtain a pre-screening assessment and check your symptoms with a few simple questions</p>
                        <Button title="Get Started" onPress={()=>history.push("/home")} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default withRouter(Startup);