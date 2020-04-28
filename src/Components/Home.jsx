import React from "react";
import { Header } from "./Header";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: "0.8",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          number: { value: 10, density: { enable: true, value_area: 900 } },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "white",
            },
          },
          size: {
            value: 15,
            random: true,
            anim: {
              enable: true,
              speed: 6,
              size_min: 0.1,
              sync: true,
            },
          },
        }}
      />
    </div>
  );
}

export default Home;
