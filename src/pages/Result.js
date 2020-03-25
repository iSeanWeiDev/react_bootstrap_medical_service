import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';
import Button from '../components/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux'
import ResultActions from '../actions/result';
import LoadingSpinner from '../components/LoadingSpinner';
import { equals, isEmpty, isNil } from 'ramda'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useRouteMatch, useHistory } from 'react-router-dom';

import 'react-circular-progressbar/dist/styles.css';

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
        minHeight: "700px",
        margin: "auto",
        position: "relative",
        padding: "25px 25px 80px 25px",
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
        fontSize: "18px",
        fontWeight: "bolder",
    },
    containerTitleSpan: {
        fontFamily: "'Roboto', 'sans-serif'",
        fontSize: "20px",
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
        height: "80px",
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
        cursor: "pointer"
    },
    
}));
function Result({
    history,
    getResultRequest,
    isDone,
    resultData,
}) {
    console.log(history);
    useEffect(() => {
        const payload = history.location.state.actions.PREDICTION;
        getResultRequest(payload)
    }, [])
    
    const classes = useStyle();
    const tooltipText = `help text`;
    console.log(resultData);
    return (
        <div className={classes.result}>
            <div className={classes.title}>
                <span>{resultData.title}</span>
            </div>
            <div className={classes.resultContainer}>
            {!isDone ? (
               <LoadingSpinner /> 
            ) : (
                <div>
                    <div className={classes.containerTitle}>
                        <img
                            className={classes.containerTitleImg} 
                            src={`/assets/icons/${resultData.icon}.png`} 
                            alt="iconMedicine" 
                        />
                        <span className={classes.containerTitleSpan}>
                            {resultData.text}
                        </span>
                        <Tooltip
                            title={tooltipText}>
                            <HelpIcon className={classes.helpIcon} />
                        </Tooltip>
                    </div>
                    <div className={classes.containerContent}>
                        <div className={classes.mainContentSection}>
                            <CircularProgressbar 
                                className={classes.contentImg}
                                value={resultData.primary.value} 
                                text={`${resultData.primary.donutText}`} 
                                styles={buildStyles({
                                    rotation: 1,
                                    strokeLinecap: 'butt',
                                    fontWeight: 900,
                                    pathColor: `${resultData.primary.donutColor}`,
                                    textColor: '#293845',
                                    trailColor: '#f88',
                                    backgroundColor: '#3e98c7',
                                })} 
                            />
                            <span className={classes.contentSpan}>
                                {resultData.primary.text}
                            </span>
                        </div>
                        {resultData.secondary.map((element, index) => (
                            <div className={classes.secondaryContentSection} key={index}>
                                <CircularProgressbar 
                                    className={classes.contentImg}
                                    value={element.value} 
                                    text={`${element.donutText}`} 
                                    styles={buildStyles({
                                        rotation: 1,
                                        strokeLinecap: 'butt',
                                        fontWeight: 900,
                                        pathColor: `${element.donutColor}`,
                                        textColor: '#293845',
                                        trailColor: '#f88',
                                        backgroundColor: '#3e98c7',
                                    })} 
                                    
                                />
                                <span className={classes.contentSpan}>
                                    {element.text}
                                </span>
                            </div>
                        ))}
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
            )}
            </div> 
        </div>
    )
}


const mapStateToProps = state => ({
    resultData: state.result.data,
    isDone: equals(state.result.status, 'done')
})

const mapDispatchToProps = dispatch => ({
    getResultRequest: payload =>  dispatch(ResultActions.getResultRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Result));