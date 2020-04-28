import React from "react";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import myCV from "./Components/myCV";
import MyForm from "./Components/myForm";
import Error from "./Components/Error";
import { Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={MyForm} />
        <Route path="/cv" component={myCV} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
