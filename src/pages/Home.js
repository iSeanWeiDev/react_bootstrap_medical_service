import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ResultActions from '../actions/result';

const useStyle = makeStyles(theme => ({
    root: {
        paddingTop: '40px',
        flexGrow: 1,
        // alignItems: "center",
        // justifyContent: "center",
        width: "950px",
        margin: "auto"
    },
    home: {
        flexGrow: 1
    },
    element: {
        padding: '15px !important',
        borderRadius: '3px',
        border: '2px solid #c3cfd9',
        margin: '10px',
    },
    assessment: {
        width: '100%',
        padding: '10px',
    },
    leftAssessment: {
        float: 'left',
        margin: 0,
        position: 'relative',
        fontSize: '22px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        lineHeight: '27px',
        paddingLeft: '15px',
        color: '#2f3d4a',
    },
    rightAssessment: {
        margin: 0,
        position: 'relative',
        float: 'right',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        lineHeight: '27px',
        paddingRight: '15px',
        color: '#2f3d4a',
    },
    assessmentContent: {
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    assessmentContentSpan: {
        color: '#293845',
        fontWeight: 500,
        fontSize: '16px',
        padding: '10px',
    },
    assessmentContentImg1: {
        width: '110px',
        height: '110px',
        marginLeft: '25px',
    },
    assessmentContentImg2: {
        width: '110px',
        height: '110px',
        marginLeft: '25px',
    },
    helpTitle: {
        float: 'left',
        margin: 0,
        position: 'relative',
        fontSize: '22px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        lineHeight: '27px',
        paddingLeft: '15px',
        color: '#2f3d4a',
    },
    btnGroup: {
        width: '100%',
        textAlign: 'center',
        marginTop: '10px',
        display: "flex",
        padding: "10px 50px 0px 50px",
        alignItems: "center",
        justifyContent: "center",
    },
    helpSection: {
        width: '320px',
        height: '60px',
        border: '2px solid #1aae9f',
        background: '#8dd7cf',
        color: 'white',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 600,
        fontSize: '18px',
        display: "flex",
        padding: "10px",
        alignItems: "center",
        cursor: 'pointer',
        justifyContent: "center",
    },
    helpBtn: {
        border: 'none',
        background: 'none',
        color: 'white',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 600,
        fontSize: '18px',
        padding: '16px 10px 16px 0px',
    },
    learnTitle: {
        float: 'left',
        margin: 0,
        position: 'relative',
        fontSize: '22px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 500,
        lineHeight: '27px',
        paddingLeft: '15px',
        color: '#2f3d4a',
    },
    learnContainer: {
        border: "2px solid #c3cfd9",
        display: "flex",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '22px',
        fontWeight: 500,
        fontFamily: "'Roboto', sans-serif",
        color: '#293845',
        lineHeight: "23px",
    },
}));
function Home({
    setScreeningType,
}) {
    const classes = useStyle();
    const history = useHistory();
    const handleMoveToPrescreening = () => {
        setScreeningType('prescreening');
        history.push("/screening/prescreening");
    }
    const handleMoveToSymptoms = () => {
        setScreeningType('symptoms');
        history.push("/screening/aio");
    }
    return (
        <div className={classes.home}>
            <Grid container className={classes.root} spacing={1}>
                <Grid item xs={12} className={classes.element}>
                    <Grid container className={classes.assessment} spacing={1}>
                        <Grid item xs={12}>
                            <p className={classes.leftAssessment}>
                                Your latest assessment:
                            </p>
                            <p className={classes.rightAssessment}>Monday 3/02/2019</p>
                        </Grid>
                        <Grid item xs={12} className={classes.assessmentContent}>
                            <img 
                                className={classes.assessmentContentImg1} 
                                src="/assets/imgs/icon1.png" alt="icon1" />
                            <img
                                className={classes.assessmentContentImg2} 
                                src="/assets/imgs/icon2.png" alt="icon2" />
                            <span className={classes.assessmentContentSpan}>
                                Potential need for <br /> medical attention
                            </span>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.element}>
                    <Grid container>
                        <Grid item xs={12}>
                            <p className={classes.helpTitle}>
                                How can we help you today?
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className={classes.btnGroup} spacing={1}>
                                <Grid item xs={6}>
                                    <div 
                                        className={classes.helpSection}
                                        onClick={handleMoveToPrescreening} 
                                    >
                                        <img
                                            style={{paddingRight: "15px", width: "47px", height: '40px',}}  
                                            src="/assets/imgs/icon6.png" 
                                            alt="icon6" 
                                        />
                                        <span 
                                            className={classes.helpBtn} 
                                        >COVID-19 Prescreening</span>
                                    </div>
                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <div 
                                        className={classes.helpSection}
                                        style={{float: 'right'}}
                                        onClick={handleMoveToSymptoms} 
                                    >
                                        <img
                                            style={{paddingRight: "15px", width: "47px", height: '40px',}}  
                                            src="/assets/imgs/icon7.png" 
                                            alt="icon7" 
                                        />
                                        <span 
                                            className={classes.helpBtn} 
                                        >Check My Symptoms</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.element}>
                    <Grid item xs={12}>
                        <p className={classes.learnTitle}>
                            I would like to learn about:
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container className={classes.boxGroup} spacing={1}>
                            <Grid 
                                item 
                                xs={6} 
                                style={{padding: "1rem 2.5rem 1rem 2.5rem"}}
                            >
                                <div className={classes.learnContainer}>
                                    <img
                                        style={{paddingRight: "15px"}}  
                                        src="/assets/imgs/icon3.png" 
                                        alt="icon3" 
                                    />
                                    <span>Prevent getting sick</span>
                                </div>
                            </Grid>
                            <Grid 
                                item 
                                xs={6}
                                style={{padding: "1rem 2.5rem 1rem 2.5rem"}}
                            >
                                <div className={classes.learnContainer}>
                                    <img
                                        style={{paddingRight: "15px"}} 
                                        src="/assets/imgs/icon4.png" 
                                        alt="icon4" />
                                    <span>Preventing spreading</span>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setScreeningType: type => dispatch(ResultActions.setScreeningRequest(type))
})

export default connect(null, mapDispatchToProps)(Home);