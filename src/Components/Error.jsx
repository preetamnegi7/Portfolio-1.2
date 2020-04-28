import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import { makeStyles, Divider } from "@material-ui/core/";
import { Card, Button, Typography, Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    background: "grey",
    borderRadius: "15px",
    justify: "center",
    height: "350px auto",
    width: "500px auto",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    opacity: ".7",
    margin: "5rem auto",
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
  },
  linkContainer: {
    color: "White",
  },
}));

export default function Error() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs-12 sm-6 xl-3 md-4 justify="center">
          <Card className={classes.cardContainer}>
            <Typography variant="h3">
              The page you trying to <br />
              access does not exist
            </Typography>
            <Divider />
            <Link to="/">
              <Button
                size="large"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <HomeIcon />
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
