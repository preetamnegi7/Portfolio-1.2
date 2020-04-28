import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  downlo: {
    display: "flex",
    color: "white",
    backgroundColor: "#505051",
    position: "center",
    marginTop: "7rem",
    height: "100%",
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <Container maxWidth="sm">
        <Button
          className={classes.downlo}
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
          href="https://github.com/preetamnegi7/Portfolio/raw/master/src/cv.pdf"
        >
          Download Resume
        </Button>
      </Container>
    </>
  );
}
