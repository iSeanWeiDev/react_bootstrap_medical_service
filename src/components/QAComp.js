import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from '@material-ui/icons/Help';
import { Checkbox, Radio, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1
    },
    helpIcon: {
    },
    questionItem: {
        color: "black"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 600,
    },
    footer: {
        position: 'absolute',
        bottom: '0px',
        width: "600px",
        left: "25px",
        borderTop: "1px solid"
    },
    arrowBackIcon: {
        fontSize: "40px",
        float: "left",
        marginTop: "10px",
        marginBottom: "10px",
        cursor: "pointer"
    },
    arrowForwardIcon: {
        fontSize: "40px",
        float: "right",
        marginTop: "10px",
        marginBottom: "10px",
        cursor: "pointer"
    }
}));

const QAComp = ({
    questions,
    history
}) => {
    const classes = useStyles();
    const [answer, setAnswer] = useState("");
    console.log(questions)
    const handleChange = (event) => {
        setAnswer(event.target.value);
    }
    const questionRender = () => {
        switch(questions.questionType) {
            case 1: 
                return (
                    <div className={classes.questionItem}>
                        <Radio />
                        Yes
                        <Radio />
                        No
                    </div>
                    
                )
            case 2: 
                return (
                    questions.questions.map(question=>
                        (
                            <div className={classes.questionItem}>
                                <Checkbox />
                                <span>{question}</span>
                            </div>
                        )
                    )
                )
            case 3: 
                return (
                    <div className={classes.questionItem}>
                        <input placeholder="Please type your age" />
                    </div>
                )
            case 4:
                return (
                    <div className={classes.questionItem}>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Input Oxygen Saturation</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={answer}
                                onChange={handleChange}
                            >
                                <MenuItem value={"90%"}>90%</MenuItem>
                                <MenuItem value={"80%"}>80%</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                )
            default: 
                return (
                    <span>There are no any questions to display.</span>
                )
        }
    }
    return (
        <div className={classes.container}>
            <h2>Select any symptoms that you are worse than usual: <HelpIcon className={classes.helpIcon} /></h2>
            {questionRender()}
            <div className={classes.footer}>
                <ArrowBackIcon className={classes.arrowBackIcon} />
                <ArrowForwardIcon className={classes.arrowForwardIcon} onClick={()=>{history.push("/result")}} />
            </div>
        </div>
    )
}
export default withRouter(QAComp);