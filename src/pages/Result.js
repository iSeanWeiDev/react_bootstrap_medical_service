import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import Button from '../components/Button';
import Tooltip from '@material-ui/core/Tooltip';

const useStyle = makeStyles(theme => ({
    result: {
        flexGrow: 1,
        width: "600px",
        margin: "auto"
    },
    title: {
        margin: "auto",
        width: "600px",
        fontSize: '30px',
        fontWeight: 800,
        fontFamily: "'Roboto', 'sans-serif'",
        color: '#1aae9f',
        padding: '15px 0px 15px 0px',
        letterSpacing: "1px",
    },
    resultContainer: {
        border: "3px solid #1aae9f",
        width: "600px",
        height: "700px",
        margin: "auto",
        position: "relative",
        padding: "25px",
        flex: 1,
    },
    containerTitle: {
        padding: '5px',
        width: "100%",
        height: '100px',
        padding: '5px 50px 0px 5px',
    },
    containerTitleImg: {
        width: '100px',
        height: '90px',
        float: 'left',
        marginRight: '20px',
    },
    containerTitleSpan: {
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "23px",
        color: "#293845",
        fontWeight: 600,
        letterSpacing: "1px",
    },
    helpIcon: {
        fontSize: "2.6rem",
        position: "absolute",
        right: "20px",
        top: "20px",
    },
    containerContent: {
        width: '100%',
        padding: '10px',
    },
    mainContentSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        margin: '30px 0px 30px 0px',
        padding: '20px',
        border: '2px solid #788896',
        borderRadius: '3px',
        width: '100%',
        height: '124px',
    },
    secondaryContentSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        padding: '20px',
        border: '2px solid #9eadba',
        borderRadius: '3px',
        margin: '10px 0px 10px 0px',
        width: '100%',
        height: '124px',
    },
    contentImg: {
        width: '90px',
        height: '90px',
        float: 'left',
        marginRight: '30px',
    },
    contentSpan: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '18px',
        color: '#2c3a47',
    },
    footer: {
        position: 'absolute',
        bottom: '0px',
        width: "540px",
        left: "25px",
        borderTop: "3px solid #1aae9f",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btnComplete: {
        width: '160px',
        height: '38px',
        color: 'white',
        background: '#1aae9f;',
        outline: 'none',
        border: 'none',
        borderRadius: '3px',
        fontSize: '18px',
        fontWeight: 700,
        fontFamily: "'Roboto', sans-serif",
    },
    
}));
function Result({
    history
}) {
    const classes = useStyle();
    const tooltipText = `help text`;
    return (
        <div className={classes.result}>
            <div className={classes.title}>
                <span>Screening Results</span>
            </div>
            <div className={classes.resultContainer}>
                <div className={classes.containerTitle}>
                    <img
                        className={classes.containerTitleImg} 
                        src="/assets/imgs/icon-medicine.png" 
                        alt="iconMedicine" 
                    />
                    <span className={classes.containerTitleSpan}>
                        Iterex Signals: Continue with you usual treatment and check back in 1-2 days
                    </span>
                    <Tooltip
                        title={tooltipText}>
                        <HelpIcon className={classes.helpIcon} />
                    </Tooltip>
                </div>
                <div className={classes.containerContent}>
                    <div className={classes.mainContentSection}>
                        <img
                            className={classes.contentImg} 
                            src="/assets/imgs/icon-med-low.png" 
                            alt="iconMedLow" 
                        />
                        <span className={classes.contentSpan}>
                            Potential need for <br /> medical attention
                        </span>
                    </div>
                    <div className={classes.secondaryContentSection}>
                        <img 
                            className={classes.contentImg}
                            src="/assets/imgs/icon-low.png" 
                            alt="iconLow" 
                        />
                        <span className={classes.contentSpan}>
                            Potential respiratory exacerbation
                        </span>
                    </div>
                    <div className={classes.secondaryContentSection}>
                        <img
                            className={classes.contentImg} 
                            src="/assets/imgs/icon-med-low.png" 
                            alt="iconMedLow" 
                        />
                        <span className={classes.contentSpan}>
                            Severity of your symptoms
                        </span>
                    </div>
                </div>
                <div className={classes.footer}>
                    <Button 
                        style={classes.btnComplete}
                        title="Complete" 
                        onPress={()=>history.push("/")} 
                        authButton={false} 
                    />
                </div>
            </div>
        </div>
    )
}
export default withRouter(Result);