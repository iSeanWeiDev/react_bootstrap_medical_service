import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '../components/Button';
import { connect } from 'react-redux'
import AuthActions from '../actions/auth';

const useStyle = makeStyles(theme => ({
    signup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "400px",
        height: "700px",
        margin: "auto"
    },
    circularProgress: {
        marginRight: "10px"
    },
    title: {
        color: "#61aba6",
        fontWeight: "400",
        fontSize: '32px',
        lineHeight: '30px',
        padding: "10px"
    },
    hereLink: {
        color: "#43747c",
        cursor: "pointer",
        paddingTop: "10px"
    },
    responseMsg: {
        color: 'red'
    },
    btnLogin: {
        width: '400px',
        height: '50px',
        color: 'white',
        background: '#61aba6',
        outline: 'none',
        border: 'none',
        borderRadius: '3px',
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: "'Roboto', sans-serif",
    },
    footerString: {
        paddingTop: '15px',
        color: '#293845',
    }
}));

function Singup({
    postSignup,
    signupResponse,
}) {
    const classes = useStyle();
    const history=useHistory();
    
    const [loading, setLoading] = useState(false);
    const [inviteCode, setInviteCode] = useState("");
    const [inviteCodeError, setInviteCodeError] = useState(false);
    const [inviteCodeHelperText, setInviteCodeHelperText] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [identifierError, setIdentifierError] = useState(false);
    const [identifierHelperText, setIdentifierHelperText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");
    const [repassword, setRepassword] = useState("");
    const [repasswordError, setRepasswordError] = useState(false);
    const [repasswordHelperText, setRepasswordHelperText] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    useEffect(() => {
        if(signupResponse.status === "success") {
            localStorage.setItem('access_token', signupResponse.response.access_token);
            localStorage.setItem('refresh_token', signupResponse.response.refresh_token);

            localStorage.setItem('username', identifier);
            history.push("/screening/onboarding")
        } else {
            setResponseMsg(signupResponse.message);
            setLoading(false);
        }
    }, [signupResponse])

    const validateEmail = (email) => {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value);
        if (e.target.value === "") {
            setEmailError(true);
            setEmailHelperText('Email is required.')
        } else if (!validateEmail(e.target.value)) {
            setEmailError(true);
            setEmailHelperText('Email is not valid.');
        } else {
            setEmailError(false);
            setEmailHelperText(' ')
        }
    }
    const onInviteCodeChange = (e) => {
        setInviteCode(e.target.value);
        if (e.target.value === "") {
            setInviteCodeError(true);
            setInviteCodeHelperText('Invite Code is required.')
        } else {
            setInviteCodeError(false);
            setInviteCodeHelperText(' ')
        }
    }
    const onIdentifierChange = (e) => {
        setIdentifier(e.target.value);
        if (e.target.value === "") {
            setIdentifierError(true);
            setIdentifierHelperText('Identifier is required.')
        } else {
            setIdentifierError(false);
            setIdentifierHelperText(' ')
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
        if(password !== repassword) {
            setPasswordError(true);
            setRepasswordError(true);
            setPasswordHelperText('Password is not matched');
            setRepasswordHelperText('Password is not matched');
        } else {
            setLoading(true);
            const payload = {
                email, identifier, password, package: 11, inviteCode
            }
            postSignup(payload);
        }
    }
    return (
        <div className={classes.signup}>
            <Typography component="h1" variant="h5" className={classes.title}>
                Awesome!
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="inviteCode"
                autoFocus
                value={inviteCode}
                onChange={onInviteCodeChange}
                error={inviteCodeError}
                helperText={inviteCodeHelperText}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Identifier"
                value={identifier}
                onChange={onIdentifierChange}
                error={identifierError}
                helperText={identifierHelperText}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="email"
                value={email}
                onChange={onEmailChange}
                error={emailError}
                helperText={emailHelperText}
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
            {responseMsg &&<span className={classes.responseMsg}>
                {responseMsg}
            </span>}
            <Button
                style={classes.btnLogin}
                title="Sing Up"
                disabled={!inviteCode || !identifier || !email || !password || !repassword || inviteCodeError || identifierError || emailError || passwordError || repasswordError}
                onPress={signup}
                authButton={true}
                progressBar={loading && <CircularProgress color="inherit" size={16} className={classes.circularProgress} />}
            />
            <Typography className={classes.footerString}>
                Do you have already your account? If yes, click 
                <span className={classes.hereLink} onClick={()=>history.push("/login")}>
                    &nbsp;here
                </span>
            </Typography>
        </div>
    )
}

const mapStateToProps = state => ({
    signupResponse: state.auth.data
})

const mapDispatchToProps = dispatch => ({
    postSignup: payload => dispatch(AuthActions.signupRequest(payload))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Singup);