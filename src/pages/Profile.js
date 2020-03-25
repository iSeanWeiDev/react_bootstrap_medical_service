import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Profilecard from '../components/Profilecard';
import {
    Grid, TextField, InputAdornment, Checkbox, Radio, MenuItem
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux'
import ProfileActions from '../actions/profile';
import LoadingSpinner from '../components/LoadingSpinner';
import { equals, isEmpty, isNil } from 'ramda';
import { withRouter } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    profile: {
        flexGrow: 1,
        width: "550px",
        margin: "auto"
    },
    title: {
        margin: "auto",
        width: "550px",
        fontSize: '30px',
        fontWeight: 800,
        fontFamily: "'Roboto', 'sans-serif'",
        color: '#1aae9f',
        padding: '15px 0px 15px 0px',
        letterSpacing: "1px",
    },
    profileContainer: {
        border: "3px solid #1aae9f",
        width: "550px",
        height: "700px",
        margin: "auto",
        position: "relative",
        padding: "25px",
        flex: 1,
        overflowX: "scroll",
        overflowY: "unset"
    },
    profileContent: {
        width: "100%",
        margin: "auto"
    },
    gridRoot: {
        flexGrow: 1,
        padding:'10px 30px 20px 30px',
    },
    profileSection: {
        textAlign: "center"
    },
    img: {
        width: "20px"
    },
    editIcon: {
        cursor: "pointer"
    },
    TextField: {
        width: "100%",
        textAlign: "left",
        padding: theme.spacing(1)
    },
    medicationsSection: {
        textAlign: "center"
    },
    questionItem2: {
        fontSize: "18px",
        fontFamily: "'Roboto', 'sans-serif'",
        padding: "10px",
        color: "#293845",
        textAlign: "left"
    },
}));
function Profile({
    getProfile,
    profileData,
    isDone,
    history
}) {
    const classes = useStyle();
    const [healthProfile, setHealthProfile] = useState([]);
    const [healthCondition, setHealthCondition] = useState([]);
    const [lungFunction, setLungFunction] = useState([]);
    const [mmrc, setMmrc] = useState([]);
    const [riskFactors, setRiskFactors] = useState([]);

    useEffect(()=> {
        getProfile();
    }, []);
    useEffect(()=> {
        if(profileData.response) {
            setHealthProfile(profileData.response[0])
            setHealthCondition(profileData.response[1])
            setLungFunction(profileData.response[2])
            setMmrc(profileData.response[3])
            setRiskFactors(profileData.response[4])
        }
    }, [profileData])
    console.log(profileData);
    return (
        <div className={classes.profile}>
             <div className={classes.title}>
                 <span>
                    Health Profile
                 </span>
             </div>
            <div className={classes.profileContainer}>
                {!isDone ? (
                    <LoadingSpinner />
                ) : (
                    
                    <div className={classes.profileContent}>
                        <Grid container className={classes.gridRoot} spacing={1} hidden>
                            <Grid item xs={4}>
                                <Profilecard value="97.0" text="02 Saturation(%)" />
                            </Grid>
                            <Grid item xs={4}>
                                <Profilecard value="87" text="Heart Rate (bpm)" />
                            </Grid>
                            <Grid item xs={4}>
                                <Profilecard value="3/6" text="COPD Assessment" />
                            </Grid>
                        </Grid>
                        {profileData.response.map((element, index) => {
                            return (
                                <div className={classes.profileSection} key={index}>
                                    <h2>
                                        {element.title} 
                                        <EditIcon 
                                            className={classes.editIcon}
                                            // onClick={()=>history.push({
                                            // pathname: '/editprofile',
                                            // state: healthProfile
                                            // })} 
                                        />
                                    </h2>
                                </div>
                            )
                        })}
                        {/* <Grid container className={classes.gridRoot} spacing={1} hidden>
                            <Grid item xs={4}>
                                <Profilecard value="97.0" text="02 Saturation(%)" />
                            </Grid>
                            <Grid item xs={4}>
                                <Profilecard value="87" text="Heart Rate (bpm)" />
                            </Grid>
                            <Grid item xs={4}>
                                <Profilecard value="3/6" text="COPD Assessment" />
                            </Grid>
                        </Grid>
                        <div className={classes.profileSection}>
                            <h1>Health Profile <EditIcon 
                                className={classes.editIcon}
                                onClick={()=>history.push({
                                    pathname: '/editprofile',
                                    state: healthProfile
                                })} /></h1>
                            <TextField
                                disabled
                                className={classes.TextField}
                                id="input-with-icon-textfield"
                                label="Gender"
                                value={healthProfile && healthProfile.answers && healthProfile.answers[0] && healthProfile.answers[0].value || ""}
                                // onChange={(e)=>healthProfileHandleChange(e, 'gender')}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src="/assets/imgs/profile-icon1.png" alt="profile-icon1" className={classes.img} />
                                    </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                disabled
                                className={classes.TextField}
                                id="input-with-icon-textfield"
                                label="Age"
                                value={healthProfile && healthProfile.answers && healthProfile.answers[1] && healthProfile.answers[1].value || ""}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src="/assets/imgs/profile-icon2.png" alt="profile-icon2" className={classes.img} />
                                    </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                disabled
                                className={classes.TextField}
                                id="input-with-icon-textfield"
                                label="Height"
                                value={healthProfile && healthProfile.answers && healthProfile.answers[2] && healthProfile.answers[2].value || ""}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src="/assets/imgs/profile-icon3.png" alt="profile-icon3" className={classes.img} />
                                    </InputAdornment>
                                    )
                                }}
                            />
                            <TextField
                                disabled
                                className={classes.TextField}
                                id="input-with-icon-textfield"
                                label="Weight"
                                value={healthProfile && healthProfile.answers && healthProfile.answers[3] && healthProfile.answers[3].value || ""}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <img src="/assets/imgs/profile-icon4.png" alt="profile-icon4" className={classes.img} />
                                    </InputAdornment>
                                    )
                                }}
                            />
                        </div>
                        <div className={classes.medicationsSection}>
                            <h1>Health Conditions <EditIcon
                                className={classes.editIcon}
                                onClick={()=>history.push({
                                pathname: '/editprofile',
                                state: healthCondition
                            })} /></h1>
                            {healthCondition && healthCondition.answers && healthCondition.answers.map(answer=>(
                                <div className={classes.questionItem2} key={answer.answerId}>
                                    {answer.value === 1 && 
                                        <TextField
                                            disabled
                                            className={classes.TextField}
                                            id="input-with-icon-textfield"
                                            value={answer.text}
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                        <div className={classes.medicationsSection}>
                            <h1>Lung Function<EditIcon
                                className={classes.editIcon}
                                onClick={()=>history.push({
                                pathname: '/editprofile',
                                state: lungFunction
                            })} /></h1>
                            {lungFunction && lungFunction.answers && lungFunction.answers.map(answer=>(
                                <div className={classes.questionItem2} key={answer.answerId}>
                                    <TextField
                                        disabled
                                        className={classes.TextField}
                                        id="input-with-icon-textfield"
                                        value={answer.value === 1 ? answer.text + "--- YES": answer.value === 0 ? answer.text + "--- NO" : ""}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={classes.medicationsSection}>
                            <h1>Normal Breathing Health (MMRC) <EditIcon
                                className={classes.editIcon}
                                onClick={()=>history.push({
                                pathname: '/editprofile',
                                state: mmrc
                            })} /></h1>
                            {mmrc && mmrc.answers && mmrc.answers.map(answer=>(
                                <div className={classes.questionItem2} key={answer.answerId}>
                                    <TextField
                                        disabled
                                        className={classes.TextField}
                                        id="input-with-icon-textfield"
                                        value={answer.value === 1 ? answer.text + "--- YES": answer.value === 0 ? answer.text + "--- NO" : ""}
                                    /> 
                                </div>
                            ))}
                        </div>
                        <div className={classes.medicationsSection}> */}
                            {/* <h1>Risk Factors <EditIcon
                                className={classes.editIcon}
                                onClick={()=>history.push({
                                pathname: '/editprofile',
                                state: riskFactors
                            })} /></h1>
                            {riskFactors && riskFactors.answers && riskFactors.answers.map(answer=>(
                                <div className={classes.questionItem2} key={answer.answerId}>
                                    {answer.value === 1 && 
                                        <TextField
                                            disabled
                                            className={classes.TextField}
                                            id="input-with-icon-textfield"
                                            value={answer.text}
                                        />
                                    }
                                </div>
                            ))}
                        </div> */}
                    </div>
                )}
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    profileData: state.profile.data,
    isDone: equals(state.profile.status, 'done')
})

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(ProfileActions.getProfileRequest()),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));