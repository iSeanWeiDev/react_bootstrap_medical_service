import React, {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from '@material-ui/icons/Help';
import { Checkbox, RadioGroup, FormControlLabel, FormLabel, Radio, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ScreeningActions from '../actions/screening';

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
        overflowX: "unset",
        overflowY: "scroll"
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
    saveAnswerRequest,
    nextQuestionRequest,
    previousQuestionRequest,
}) => {
    // console.log('questions', questions)
    const classes = useStyles();
    const tooltipText = `help text`;
    const [answer, setAnswer] = useState({});

    useEffect(()=>{
        let tempAnswer = {};
        questions && questions.answers && questions.answers.map(answer=>{
            tempAnswer = {
                ...tempAnswer,
                [answer.answerId]: answer.value
            };
        })
        setAnswer(tempAnswer)
    }, [questions])

    const handleChange = (event, answerType, key) => {
        switch(answerType) {
            case 1:
                setAnswer({
                    [key]: event.target.checked ? 1 : 0
                });
                break;

            case 2: 
                setAnswer({
                    ...answer,
                    [key]: event.target.checked ? 1 : 0
                });
                break;
            default: 
                setAnswer({
                    ...answer,
                    [key]: event.target.value
                });
                break;
        }
    }

    // console.log("answer", answer)
    const AnswerComponent = (data) => {
        // console.log('data', data);
        switch(data.answerType) {
            case 1:
                return (
                    <div className={classes.questionItem1}>
                        <Radio 
                            checked={answer[data.answerId] === 1 ? true : false}
                            onChange={(e)=>handleChange(e, 1, data.answerId)}
                        />
                        <span>{data.text}</span>
                    </div>
                )
            case 2: 
                return (
                    <div className={classes.questionItem2}>
                        <Checkbox 
                            checked={answer[data.answerId] === 1 ? answer[data.answerId] : false}
                            onChange={(e)=>handleChange(e, 2, data.answerId)}
                        />
                        <span>{data.text}</span>
                    </div>
                )
            case 3: 
                return (
                    <div className={classes.questionItem3}>
                        <input
                            className={classes.answerInput} 
                            placeholder={data.attribute && data.attribute.hintText}
                            value={answer[data.answerId] !== -1 ? answer[data.answerId] : ""}
                            onChange={(e)=>handleChange(e, 3, data.answerId)} 
                        />
                    </div>
                )
            case 4:
                return (
                    <div className={classes.questionItem4}>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">
                                {data.text}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={answer[data.answerId] !== -1 ? answer[data.answerId] : ""}
                                onChange={(e)=> handleChange(e, 4, data.answerId)}
                            >
                                {data.attribute.data.map(attr => (
                                    <MenuItem value={parseInt(attr.value)} key={attr.value}>
                                        {attr.text}
                                    </MenuItem>
                                ))}
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

    const previousQuestion = () => {
        const payload = questions.actions.previous;
        previousQuestionRequest(payload);
    }
    const nextQuestion = () => {
        const questionsAnswer = questions.answers;
        const savePayload = {
            questionId: questions.actions.answer && questions.actions.answer.body.questionId,
            userQuestionnaireResponseId: questions.actions.answer && questions.actions.answer.body.userQuestionnaireResponseId,
            answers: questionsAnswer && questionsAnswer.map(_answer=>{
                // console.log(answer[_answer.answerId]);
                let value;
                if (answer[_answer.answerId] === undefined) {
                    value = 0;
                } else {
                    value = answer[_answer.answerId] !== -1 ? parseInt(answer[_answer.answerId]) : 0
                }
                return {
                    answerId: _answer.answerId,
                    value: value
                }
            })
        }
        const nextPayload = questions.actions.next;
        // console.log(savePayload);
        saveAnswerRequest(savePayload);
        nextQuestionRequest(nextPayload);
    }

    // const isValid = () => {
    //     const validation = false;
    //     console.log('www', questions.answers)
    //     questions.answers.foreach(answer=>{
    //         if(questions.answers.answerType === 2){
    //             return answerCount(answer) > 0 ? -1 : "Please select one of answers"
    //         } else {
    //             return answerCount(answer) === questions.answers.length ? -1 : "Please answer for all questions"
    //         }    
    //     })
    // }
    return (
        <div className={classes.container}>
            <div className={classes.question}>
                <span>
                    {questions && questions.question}
                </span>
                <Tooltip
                    title={tooltipText}>
                    <HelpIcon className={classes.helpIcon} />
                </Tooltip>
            </div>
            <div className="answer">
                {questions && questions.answers && questions.answers.map(item=> (
                    <div key={item.answerId}>
                        {AnswerComponent(item)}
                    </div>
                ))}
            </div>
            <div className={classes.footer}>
                <img
                    className={classes.arrowBackIcon} 
                    onClick={previousQuestion}
                    src="/assets/imgs/icon-arrow-left.png" 
                    alt="iconArrowLeft" 
                />
                <img
                    className={classes.arrowForwardIcon}
                    onClick={nextQuestion} 
                    src="/assets/imgs/icon-arrow-right.png" 
                    alt="iconArrowRight" 
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    nextQuestionRequest: payload=> dispatch(ScreeningActions.nextQuestionRequest(payload)),
    previousQuestionRequest: payload=> dispatch(ScreeningActions.previousQuestionRequest(payload)),
    saveAnswerRequest: payload =>  dispatch(ScreeningActions.saveAnswerRequest(payload))
})

export default connect(null, mapDispatchToProps)(QAComp);