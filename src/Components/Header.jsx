import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "./Pritam.jpg";
import Typed from "react-typed";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  negi: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: theme.spacing(1),
  },
  title: {
    color: "white",
  },
  subtitle: {
    color: "white",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          variant="circle"
          src={avatar}
          alt="Pritam"
          className={classes.negi}
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Pritam Singh Negi"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Mechanical Designer", "Web Developer"]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};
