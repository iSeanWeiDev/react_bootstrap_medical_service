import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import QAComp from '../components/QAComp';

const useStyle = makeStyles(theme => ({
    screening: {
        flexGrow: 1
    },
    title: {
        color: "#43747c",
        fontWeight: "900",
        margin: "auto",
        width: "650px",
        paddingBottom: "10px"
    },
    qacomp: {
        border: "1px solid #43747c",
        width: "650px",
        height: "700px",
        margin: "auto",
        position: "relative"
    }
}));
function Screening() {
    const questions = {
        questionType: 4,
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
            <h1 className={classes.title}>Screening</h1>
            <div className={classes.qacomp}>
                <QAComp questions={questions} />
            </div>
        </div>
    )
}
export default Screening;