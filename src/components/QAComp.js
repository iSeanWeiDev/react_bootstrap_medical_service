import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from '@material-ui/icons/Help';
import { Checkbox, Radio, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        flexGrow: 1
    },
    helpIcon: {
        fontSize: "2.6rem",
        position: "absolute",
        right: "20px",
        top: "20px",
    },
    question: {
        display: "inline",
        fontSize: "22px",
        color: "#293845",
        fontWeight: 600,
        fontFamily: "'Roboto', 'sans-serif'",
    },
    questionItem1: {
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "18px",
        color: "#293845",
        padding: "10px",
    },
    questionItem2: {
        fontSize: "18px",
        fontFamily: "'Roboto', 'sans-serif'",
        padding: "10px",
        color: "#293845"
    },
    questionItem3: {
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "18px",
        padding: "10px",
        color: "#293845"
    },
    answerInput: {
        width: '300px',
        height: '50px',
        borderRadius: '3px',
        border: '2px solid #c3cfd9',
        outline: 'none',
        padding: '10px',
        fontSize: '18px',
        fontWeight: 500,
        fontFamily: "'Roboto', sans-serif",
    },
    questionItem4: {
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "18px",
        padding: "10px",
        color: "#293845"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
    footer: {
        position: 'absolute',
        bottom: '0px',
        width: "540px",
        left: "25px",
        borderTop: "3px solid #1aae9f",
    },
    arrowBackIcon: {
        width: "40px",
        height: "40px",
        float: "left",
        marginTop: "10px",
        marginBottom: "10px",
        cursor: "pointer"
    },
    arrowForwardIcon: {
        width: "40px",
        height: "40px",
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
    console.log(questions);
    const classes = useStyles();
    const tooltipText = `help text`;
    const [answer, setAnswer] = useState("");
    const handleChange = (event) => {
        setAnswer(event.target.value);
    }
    const answerRender = item => {
        console.log(item);
        switch(item.answerType) {
            case 1: 
                return (
                    <div className={classes.questionItem1}>
                        <Radio />
                        Yes <br />
                        <Radio />
                        No
                    </div>
                )
            case 2: 
                return (
                    questions.questions.map(question=>
                        (
                            <div className={classes.questionItem2}>
                                <Checkbox />
                                <span>{question}</span>
                            </div>
                        )
                    )
                )
            case 3: 
                return (
                    <div className={classes.questionItem3}>
                        <input
                            className={classes.answerInput} 
                            placeholder="Please type your age" />
                    </div>
                )
            case 4:
                return (
                    <div className={classes.questionItem4}>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">
                                {item.text}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={answer}
                                onChange={handleChange}
                            >
                                {item.data.map(attr => {
                                    <MenuItem value={attr.value} isKey>
                                        {attr.text}
                                    </MenuItem>
                                })}
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
            <div className={classes.question}>
                <span>
                    {questions.question}
                </span>
                <Tooltip
                    title={tooltipText}>
                    <HelpIcon className={classes.helpIcon} />
                </Tooltip>
            </div>
            <div className="answer">
                {questions.answers.map(item=> answerRender(item))}
            </div>
            <div className={classes.footer}>
                <img
                    className={classes.arrowBackIcon} 
                    src="/assets/imgs/icon-arrow-left.png" 
                    alt="iconArrowLeft" 
                />
                <img
                    className={classes.arrowForwardIcon}
                    onClick={()=>{history.push("/result")}} 
                    src="/assets/imgs/icon-arrow-right.png" 
                    alt="iconArrowRight" 
                />
            </div>
        </div>
    )
}
export default withRouter(QAComp);