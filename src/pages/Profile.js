import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Profilecard from '../components/Profilecard';
import {
    Grid, TextField, InputAdornment
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const useStyle = makeStyles(theme => ({
    profile: {
        flexGrow: 1
    },
    title: {
        color: "#43747c",
        fontWeight: "900",
        margin: "auto",
        width: "650px",
        paddingBottom: "10px"
    },
    profileContainer: {
        border: "1px solid #43747c",
        width: "650px",
        height: "700px",
        margin: "auto",
        position: "relative"
    },
    profileContent: {
        width: "500px",
        margin: "auto"
    },
    gridRoot: {
        flexGrow: 1
    },
    profileSection: {
        textAlign: "center"
    },
    img: {
        width: "20px"
    },
    TextField: {
        width: "100%",
        padding: theme.spacing(1)
    },
    medicationsSection: {
        textAlign: "center"
    }
}));
function Profile() {
    const classes = useStyle();
    return (
        <div className={classes.profile}>
            <div className={classes.profileContainer}>
                <h1 className={classes.title}>Health Profile</h1>
                <div className={classes.profileContent}>
                    <Grid container className={classes.gridRoot} spacing={1}>
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
                        <h1>Profile <EditIcon /></h1>
                        <TextField
                            className={classes.TextField}
                            id="input-with-icon-textfield"
                            label="Gender"
                            value="Male"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src="/assets/imgs/profile-icon1.png" alt="profile-icon1" className={classes.img} />
                                </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.TextField}
                            id="input-with-icon-textfield"
                            label="Age"
                            value="56"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src="/assets/imgs/profile-icon2.png" alt="profile-icon2" className={classes.img} />
                                </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.TextField}
                            id="input-with-icon-textfield"
                            label="Height"
                            value={`6" 6'`}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src="/assets/imgs/profile-icon3.png" alt="profile-icon3" className={classes.img} />
                                </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            className={classes.TextField}
                            id="input-with-icon-textfield"
                            label="Weight"
                            value="186"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <img src="/assets/imgs/profile-icon4.png" alt="profile-icon4" className={classes.img} />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className={classes.medicationsSection}>
                        <h1>Medications <EditIcon /></h1>
                        <TextField
                            className={classes.TextField}
                            id="input-with-icon-textfield"
                            label="Albuterol"
                            value="100ug / application 2 times a day"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;