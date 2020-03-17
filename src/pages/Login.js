import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '../components/Button';

const useStyle = makeStyles(theme => ({
    login: {
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
        cursor: "pointer"
    }
}));

function Login({
    history
}) {
    const classes = useStyle();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");

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
    const login = () => {
        setLoading(true);
        setTimeout(()=> {
            localStorage.setItem('jwt', "test");
            localStorage.setItem('username', username);
            history.push("/")
        }, 3000);
    }
    return (
        <div className={classes.login}>
            <Typography component="h1" variant="h5" className={classes.title}>
                Sign in
            </Typography>
            <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                autoFocus
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
            <Button
                title="Log In"
                disabled={usernameError || passwordError}
                onPress={login}
                authButton={true}
                progressBar={loading && <CircularProgress color="inherit" size={16} className={classes.circularProgress} />}
            />
            <Typography component="h1" variant="h5">
                Don't you have your account yet? If yes, click <span className={classes.hereLink} onClick={()=>history.push("/signup")}>here</span>
            </Typography>
        </div>
    )
}
export default withRouter(Login);