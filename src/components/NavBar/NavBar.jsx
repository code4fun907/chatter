import { navRoutes } from "../../utils/routeUtils";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { useHistory, Link } from "react-router-dom";
import useStyles from "./styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ListItemLink from "../common/ListItemLink";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const history = useHistory();

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleLogout = () => {
    setSideBarOpen(!sideBarOpen);
    logout();
    history.push("/login");
  };

  const renderMobileNavigation = () => (
    <>
      <IconButton color="inherit" onClick={toggleSideBar}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={sideBarOpen}
        onClose={toggleSideBar}
        className={classes.sideBar}
      >
        <List>
          {navRoutes.map(({ text, to }) => (
            <ListItemLink
              key={text}
              primary={text}
              to={to}
              onClick={toggleSideBar}
            />
          ))}
          {currentUser && (
            <ListItemLink
              key="skfh8es4h8hore8h"
              primary="Logout"
              to="/login"
              onClick={handleLogout}
            />
          )}
        </List>
      </Drawer>
    </>
  );

  const renderNavigation = () => (
    <>
      {navRoutes.map(({ text, to }) => (
        <Link className={classes.navigationLink} to={to}>
          {text}
        </Link>
      ))}
      {currentUser && (
        <Link
          to="/login"
          className={classes.navigationLink}
          onClick={handleLogout}
        >
          Logout
        </Link>
      )}
    </>
  );

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Chatter
        </Typography>
        {isSmall ? renderMobileNavigation() : renderNavigation()}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
