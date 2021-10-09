import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, DrinkTool, PageNotFound } from "./pages";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/drinktool">
        <DrinkTool />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
