import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid
} from "@material-ui/core";
import Button from '../components/Button';
import { withRouter } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    home: {
        flexGrow: 1
    },
    latestAssessment: {

    },
    element: {
        border: "1px solid",
        margin: "40px",
        padding: "10px"
    },
    learnContainer: {
        border: "1px solid",
        padding: "10px"
    }

}));
function Home({
    history
}) {
    const classes = useStyle();
    return (
        <div className={classes.home}>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12} className={classes.element}>
                    <Grid container className={classes.root} spacing={1}>
                        <Grid item xs={3}>
                            <h2>Your latest assessment:</h2>
                        </Grid>
                        <Grid item xs={6}>
                            <img src="/assets/imgs/icon1.png" alt="icon1" />
                            <img src="/assets/imgs/icon2.png" alt="icon2" />
                            <span>Potential need for medical attention</span>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Monday 3/02/2019</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.element}>
                    <h2>How can we help you today?</h2>
                    <Grid container className={classes.root} spacing={1}>
                        <Grid item xs={6}>
                            <Button title="COVID-19 Prescreening" authButton={false} />
                        </Grid>
                        <Grid item xs={6}>
                            <Button title="Check My Symptoms" onPress={()=>history.push("/screening")} authButton={false} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.element}>
                    <h2>I would like to learn about:</h2>
                    <Grid container className={classes.root} spacing={1}>
                        <Grid item xs={6}>
                            <div className={classes.learnContainer}>
                                <img src="/assets/imgs/icon3.png" alt="icon3" />
                                <span>Prevent getting sick</span>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.learnContainer}>
                                <img src="/assets/imgs/icon4.png" alt="icon4" />
                                <span>Preventing spreading</span>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default withRouter(Home);