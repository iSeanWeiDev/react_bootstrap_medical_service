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
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

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
    fontSize: "14px",
    fontWeight: "900",
    width: "150px",
    textAlign: "right"
  },
  iconButton: {
    color: "#dfe6ed",
    fontSize: "40px",
    cursor: "pointer",
    float: "right"
  },
  accountIcon: {
    color: "#dfe6ed",
    fontSize: "40px",
  }
}));

const StyledToolbar = withStyles(theme => ({
  regular: {
    minHeight: "60px"
  }
}))(Toolbar);

function Appbar({
  isAuthenticated,
  history
}) {
  const classes = useStyles();
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
    console.log()
  };

  const Logout = () => {
    setAnchorEl(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    history.push("/")
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
                  {isAuthenticated ? localStorage.getItem("username") : "Sign In or Sign Up"}
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

export default withRouter(Appbar);
