import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import QAComp from '../components/QAComp';
import { connect } from 'react-redux'
import { equals, isEmpty, isNil } from 'ramda'

import ScreeningActions from '../actions/screening';
import LoadingSpinner from '../components/LoadingSpinner';

const useStyle = makeStyles(theme => ({
    screening: {
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
    },
    qacomp: {
        border: "3px solid #1aae9f",
        width: "600px",
        height: "700px",
        margin: "auto",
        position: "relative",
        padding: "25px 55px 25px 25px"
    }
}));
function Screening({
    getScreeningRequest,
    screeningData,
    isDone,
}) {
    useEffect(()=> {
        const payload = {
            "operation":"start",
            "questionSetTypeName": "PROCESS_ONBOARDING"
        }
        getScreeningRequest(payload);
    }, []);
    const questions = {
        questionType: 3,
        questions: [
            "Shortness of Breath",
            "Cough",
            "Fever",
            "Chest Pain",
            "Phlegm"
        ]
    }
    const classes = useStyle();
    return (
        <div className={classes.screening}>
            {!isDone ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <div className={classes.title}>
                        <span>
                            Screening
                        </span>
                    </div>
                    <div className={classes.qacomp}>
                        <QAComp questions={screeningData.response} />
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        screeningData: state.screening.data,
        isDone: equals(state.screening.status, 'done')
    })
}

const mapDispatchToProps = dispatch => ({
    getScreeningRequest: payload =>  dispatch(ScreeningActions.getScreeningRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Screening);