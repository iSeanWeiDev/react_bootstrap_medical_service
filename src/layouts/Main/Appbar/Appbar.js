import React from "react";

import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle } from '@material-ui/icons';
import { connect } from 'react-redux'
import AppActions from '../../../actions/app';
import AuthActions from '../../../actions/auth';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    fontFamily: "'Roboto', 'sans-serif'",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    width: "250px"
  },
  logo: {
    height: "50px",
    backgroundColor: "white",
    padding: "5px",
    cursor: "pointer"
  },
  menu: {
    flexGrow: 1,
    color: "black",
    fontSize: "1rem",
    fontWeight: 600,

  },
  link: {
    paddingRight: "25px",
    cursor: "pointer",
    color: "#293845",
    fontSize: "18px",
  },
  sectionDesktop: {
    display: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      width: 250
    }
  },
  appBar: {
    backgroundColor: '#61aba6' ,
    // color: '#c1c1c1',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    "& a": {
      color: "inherit"
    }
  },
  accountContainer: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: "1rem",
    fontWeight: 600,
    padding: theme.spacing(1, 1, 1, 3),
    transition: theme.transitions.create("width"),
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  accountSpan: {
    float: "right",
    color: "#293845",
    fontSize: "18px",
    fontWeight: 500,
    width: "150px",
    textAlign: "right"
  },
  iconButton: {
    color: "#293845",
    fontSize: "40px",
    cursor: "pointer",
    float: "right"
  },
  accountIcon: {
    color: "#293845",
    fontSize: "40px",
  },
}));

const StyledToolbar = withStyles(theme => ({
  regular: {
    minHeight: "60px"
  }
}))(Toolbar);

function Appbar({
  isAuthenticated,
  clearRequest,
  logoutRequest,
}) {
  console.log(isAuthenticated);
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    if(isAuthenticated) {
      setAnchorEl(event.currentTarget);
    } else {
      history.push("/login")
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const goToProfile = () => {
    setAnchorEl(null);
    history.push("/profile");
  };

  const Logout = () => {
    setAnchorEl(null);
    clearRequest();
    logoutRequest();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    history.push('/');
  };

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <StyledToolbar>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src="/assets/imgs/Iterex Therapeutics_logo.png" alt="logo" onClick={()=> history.push("/")} />
          </div>
          <div className={classes.menu}>
            <span className={classes.link} onClick={()=>history.push("/about")}>About</span>
            <span className={classes.link} onClick={()=>history.push("/solutions")}>Solutions</span>
            <span className={classes.link} onClick={()=>history.push("/contact")}>Contact Us</span>
          </div>
          <div className={classes.sectionDesktop}>
            <div className={classes.accountContainer}>
                <span className={classes.accountSpan}>
                  {/* {isAuthenticated ? localStorage.getItem("username") : "Login or Signup"} */}
                  {isAuthenticated ? "Welcome " : "Login or Signup"}
                </span>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  className={classes.iconButton}
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle className={classes.accountIcon} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={goToProfile}>Profile</MenuItem>
                  <MenuItem onClick={Logout}>Logout</MenuItem>
                </Menu>
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.app.authenticated
})

const mapDispatchToProps = dispatch => ({
  clearRequest: () => dispatch(AppActions.clearRequest()),
  logoutRequest: () => dispatch(AuthActions.logoutRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);
