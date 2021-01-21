import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DrinkToolPolicy from "./pages/drinktool-policy/DrinkToolPolicy";
import PageNotFound from "./pages/page-not-found/PageNotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/drinktool-policy" children={<DrinkToolPolicy />} />
        <Route path="/*" children={<PageNotFound />} />
      </Switch>
    </Router>
  );
}

export default App;
