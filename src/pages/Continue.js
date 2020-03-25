import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import Button from '../components/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import ScreeningActions from '../actions/screening';
import { equals, isEmpty, isNil } from 'ramda'
import LoadingSpinner from '../components/LoadingSpinner';

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
        padding: '20px 30px 0px 30px',
        
    },
    contentSection: {
        width: '100%',
        padding: '10px',
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "23px",
        color: "#293845",
        fontWeight: 400,
        textAlign: "center",
    },
    contentBottomSection: {
        width: '100%',
        padding: '20px 30px 0px 30px',
        textAlign: "center",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    contentBottomSpan: {
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "17px",
        color: "#293845",
        fontWeight: 300,
        marginTop: '40px',
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
        cursor: 'pointer'
    },
    btnContinue: {
        width: '200px',
        height: '50px',
        color: 'white',
        background: '#1aae9f;',
        outline: 'none',
        border: 'none',
        borderRadius: '3px',
        fontSize: '18px',
        fontWeight: 700,
        fontFamily: "'Roboto', sans-serif",
        cursor: 'pointer'
    },
}));
function Result({
    isDone,
    prediction,
    predictionRequest,
    history,
    match
}) {
    const classes = useStyle();
    const tooltipText = `help text`;
    useEffect(()=> {
        predictionRequest(history.location.state.actions ? history.location.state.actions.PREDICTION : {url: "/health/amiokay?operation=predict"});
        // predictionRequest({url: history.location.state.actions.PREDICTION.url });
    },[])
    return (
        <div className={classes.result}>
            <div className={classes.title}>
                <span>Screening Results</span>
            </div>
            
                <div className={classes.resultContainer}>
                    {!isDone ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <div className={classes.containerTitle}>
                                <img
                                    className={classes.containerTitleImg} 
                                    src="/assets/imgs/icon-continue.png" 
                                    alt="iconMedicine" 
                                />
                                <span className={classes.containerTitleSpan}>
                                    You are unlikely to be approved for COVID-19 virus testing at any healthcare facility. 
                                </span>
                                <Tooltip
                                    title={tooltipText}>
                                    <HelpIcon className={classes.helpIcon} />
                                </Tooltip>
                            </div>
                            <div className={classes.containerContent}>
                                <div className={classes.contentSection}>
                                    {prediction.message ? <span>
                                        {prediction.message}
                                    </span> :
                                    <span>
                                        Please continue with your usual treatment
                                        plan and check your symptoms to access
                                        your current health.
                                    </span> }
                                </div>
                                <div className={classes.contentBottomSection}>
                                    <span className={classes.contentBottomSpan}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </span>
                                </div>
                            </div>
                            
                            <div className={classes.footer}>
                                {prediction.message ? <Button 
                                    style={classes.btnContinue}
                                    title="Continue to complete questionnaire" 
                                    onPress={()=>history.push("/home")} 
                                    authButton={false} 
                                /> : 
                                <Button 
                                    style={classes.btnComplete}
                                    title="Complete" 
                                    onPress={()=>history.push("/result")} 
                                    authButton={false} 
                                />}
                            </div>
                        </>
                    )}
                </div>
        </div>
    )
}
const mapStateToProps = state => ({
    prediction: state.screening.data,
    isDone: !equals(state.screening.status, "pending")
})

const mapDispatchToProps = dispatch => ({
    predictionRequest: (payload) =>  dispatch(ScreeningActions.predictionRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Result));