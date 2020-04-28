import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Menu,
  Description,
} from "@material-ui/icons";
import Footer from "./Footer";
import avatar from "./Pritam.jpg";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#455765",
    height: "100%",
  },
  negi: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  homebutton: {
    position: "absolute",
    right: "25px",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "My Timeline",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "My Skills",
    listPath: "/portfolio",
  },

  {
    listIcon: <Description />,
    listText: "Curriculum Vitae",
    listPath: "/cv",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];

const Navbar = () => {
  const [state, setState] = useState({ left: false });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar
        variant="circle"
        src={avatar}
        alt="Pritam"
        className={classes.negi}
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon style={{ color: "white" }}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={lsItem.listText}
              style={{ color: "white" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#253a4b" }}>
        <Toolbar>
          <IconButton onClick={toggleSlider("left", true)}>
            <Menu style={{ color: "white" }} />
          </IconButton>

          <Typography variant="h5" className={classes.title}>
            My Portfolio
          </Typography>
          <MobileRightMenuSlider
            anchor="left"
            open={state.left}
            onClose={toggleSlider("left", false)}
          >
            {sideList("left")}
            <Footer />
          </MobileRightMenuSlider>
          <IconButton className={classes.homebutton} component={Link} to={"/"}>
            <Home style={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
