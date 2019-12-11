import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import SinglePlace from "./pages/SinglePlace";
import Packages from "./pages/Packages";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/flowers" component={Places} />
        <Route exact path="/flwoers/:slug" component={SinglePlace} />
        <Route exact path="/packages" component={Packages} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
