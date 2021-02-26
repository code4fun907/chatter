import { useState, Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  sideBar: {
    width: "50vw",
  },
});

const SideBarLink = ({ icon, text }) => (
  <ListItem button>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const renderNavLinksResponsively = () => {
    if (isSmall) {
      return (
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleSideBar}
        >
          <MenuIcon />
        </IconButton>
      );
    }

    return <Button color="inherit">login</Button>;
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Chatter
        </Typography>
        {renderNavLinksResponsively()}
        <Drawer anchor="right" open={sideBarOpen} onClose={toggleSideBar}>
          <List className={classes.sideBar}>
            {[["login", <LockOpenIcon />]].map(([text, icon], index) => (
              <Fragment key={index}>
                <SideBarLink icon={icon} text={text} />
                <Divider />
              </Fragment>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
