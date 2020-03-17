import React from "react";

import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Link,
} from "@material-ui/core";
import { withRouter } from "react-router";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
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
    padding: "10px",
    cursor: "pointer"
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
    padding: "10px"
  },
  accountIcon: {
    color: "#dfe6ed",
    fontSize: "40px",
    cursor: "pointer"
  }
}));

const StyledToolbar = withStyles(theme => ({
  regular: {
    minHeight: "60px"
  }
}))(Toolbar);

function Appbar({
  history
}) {
  const classes = useStyles();
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
                Sign In or Sign Up
              </span>
              <AccountCircleIcon className={classes.accountIcon} onClick={()=>history.push("/profile")} />
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Appbar);
