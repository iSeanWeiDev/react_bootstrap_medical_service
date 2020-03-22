import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import QAComp from '../components/QAComp';

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
function Screening() {
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
            <div className={classes.title}>
                <span>
                    Screening
                </span>
            </div>
            <div className={classes.qacomp}>
                <QAComp questions={questions} />
            </div>
        </div>
    )
}
export default Screening;