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
    login: {
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
        cursor: "pointer"
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

function Login({
    postSignin,
    signinResponse
}) {
    const classes = useStyle();
    const history = useHistory();
    
    const [loading, setLoading] = useState(false);
    const [identifier, setIdentifier] = useState("");
    const [identifierError, setIdentifierError] = useState(false);
    const [identifierHelperText, setIdentifierHelperText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");
    const [responseMsg, setResponseMsg] = useState("");

    useEffect(() => {
        console.log(signinResponse)
        if(signinResponse.status === "success") {
            // localStorage.setItem('access_token', signinResponse.response.access_token);
            // localStorage.setItem('refresh_token', signinResponse.response.refresh_token);

            // localStorage.setItem('username', identifier);
            history.push("/")
        } else {
            setResponseMsg(signinResponse.message);
            setLoading(false);
        }
    }, [signinResponse])

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
    const onIdentifierChange = (e) => {
        setIdentifier(e.target.value);
        if (e.target.value === "") {
            setIdentifierError(true);
            setIdentifierHelperText('Identifier is required');
        } else {
            setIdentifierError(false);
            setIdentifierHelperText(' ');
        }
    }
    const login = () => {
        setLoading(true);
        const payload = {
            identifier, password
        }
        
        postSignin(payload);
    }
    return (
        <div className={classes.login}>
            <Typography className={classes.title}>
                Welcome to ITEREX.
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Identifier"
                autoFocus
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
                label="Password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                error={passwordError}
                helperText={passwordHelperText}
            />
            {responseMsg &&<span className={classes.responseMsg}>
                {responseMsg}
            </span>}
            <Button
                title="Log In"
                style={classes.btnLogin}
                disabled={!identifier || !password || identifierError || passwordError}
                onPress={login}
                authButton={true}
                progressBar={loading && <CircularProgress color="inherit" size={16} className={classes.circularProgress} />}
            />
            <Typography className={classes.footerString}>
                Don't you have your account yet? If yes, click 
                <span className={classes.hereLink} onClick={()=>history.push("/signup")}>
                    &nbsp;here
                </span>
            </Typography>
        </div>
    )
}
const mapStateToProps = state => ({
    signinResponse: state.auth.data
})

const mapDispatchToProps = dispatch => ({
    postSignin: payload => dispatch(AuthActions.signinRequest(payload)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);