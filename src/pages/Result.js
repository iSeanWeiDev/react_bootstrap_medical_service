import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import Button from '../components/Button';

const useStyle = makeStyles(theme => ({
    result: {
        flexGrow: 1
    },
    title: {
        color: "#43747c",
        fontWeight: "900",
        margin: "auto",
        width: "650px",
        paddingBottom: "10px"
    },
    resultContainer: {
        border: "1px solid #43747c",
        width: "650px",
        height: "700px",
        margin: "auto",
        position: "relative"
    },
    footer: {
        position: 'absolute',
        bottom: '0px',
        width: "600px",
        left: "25px",
        borderTop: "1px solid",
        padding: "10px"
    }
}));
function Result({
    history
}) {
    const classes = useStyle();
    return (
        <div className={classes.result}>
            <h1 className={classes.title}>Screening Results</h1>
            <div className={classes.resultContainer}>
                <h2>You are unlikely to be approved for COVID-19 virus testing at any healthcare facility. <HelpIcon className={classes.helpIcon} /></h2>
                <p>Please continue with your usual treatment plan and check your symptoms to access your current health.</p>
                <img src="/assets/imgs/health.png" alt="health" />
                <div className={classes.footer}>
                    <Button title="Complete" onPress={()=>history.push("/")}/>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Result);