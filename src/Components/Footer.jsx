import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Youtube from "@material-ui/icons/YouTube";
import Facebook from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "grey",
      "&:hover": {
        fill: "white",
        fontSize: "1.8",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <BottomNavigation
        width="auto"
        style={{ color: "white", background: "#222" }}
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Facebook />}
          href="https://www.facebook.com/Learn-Designing-CAD-851114908569816"
          target="_blank"
        ></BottomNavigationAction>

        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Youtube />}
          href="https://www.youtube.com/channel/UCB83K7FgWgUnzITJ5PPU85A"
          target="_blank"
        />
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/pritamnegi7/"
          target="_blank"
        />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
