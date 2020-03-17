import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '../components/Button';

const useStyle = makeStyles(theme => ({
    signup: {
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "650px",
        height: "700px",
        margin: "auto"
    },
    circularProgress: {
        marginRight: "10px"
    },
    title: {
        color: "#43747c",
        fontWeight: "900",
        padding: "10px"
    },
    hereLink: {
        color: "#43747c",
        cursor: "pointer",
        paddingTop: "10px"
    }
}));

function Singup({
    history
}) {
    const classes = useStyle();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState("");
    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState(false);
    const [fullNameHelperText, setFullNameHelperText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");
    const [repassword, setRepassword] = useState("");
    const [repasswordError, setRepasswordError] = useState(false);
    const [repasswordHelperText, setRepasswordHelperText] = useState("");

    const validateEmail = (email) => {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
        if (e.target.value === "") {
            setUsernameError(true);
            setUsernameHelperText('Email is required.')
        } else if (!validateEmail(e.target.value)) {
            setUsernameError(true);
            setUsernameHelperText('Email is not valid.');
        } else {
            setUsernameError(false);
            setUsernameHelperText(' ')
        }
    }
    const onFullnameChange = (e) => {
        setFullName(e.target.value);
        if (e.target.value === "") {
            setFullNameError(true);
            setFullNameHelperText('Email is required.')
        } else {
            setFullNameError(false);
            setFullNameHelperText(' ')
        }
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value === "") {
            setPasswordError(true);
            setPasswordHelperText('Password is required');
        } else {
            setPasswordError(false);
            setPasswordHelperText(' ');
        }
    }
    const onRepasswordChange = (e) => {
        setRepassword(e.target.value);
        if (e.target.value === "") {
            setRepasswordError(true);
            setRepasswordHelperText('Password is required');
        } else {
            setRepasswordError(false);
            setRepasswordHelperText(' ');
        }
    }
    const signup = () => {
        setLoading(true);
        setTimeout(()=> {
            console.log("signup")
        }, 3000);
    }
    return (
        <div className={classes.signup}>
            <Typography component="h1" variant="h5" className={classes.title}>
                Sign Up
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Full Name"
                autoFocus
                value={fullName}
                onChange={onFullnameChange}
                error={fullNameError}
                helperText={fullNameHelperText}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email"
                value={username}
                onChange={onUsernameChange}
                error={usernameError}
                helperText={usernameHelperText}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                error={passwordError}
                helperText={passwordHelperText}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                value={repassword}
                onChange={onRepasswordChange}
                error={repasswordError}
                helperText={repasswordHelperText}
            />
            <Button
                title="Sing Up"
                disabled={usernameError || passwordError}
                onPress={signup}
                authButton={true}
                progressBar={loading && <CircularProgress color="inherit" size={16} className={classes.circularProgress} />}
            />
            <Typography component="h1" variant="h5">
                Do you have already your account? If yes, click <span className={classes.hereLink} onClick={()=>history.push("/login")}>here</span>
            </Typography>
        </div>
    )
}
export default withRouter(Singup);