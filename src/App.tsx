import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, DrinkToolPolicy, PageNotFound } from "./pages";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route path="/drinktool-policy" children={<DrinkToolPolicy />} />
      <Route path="/*" children={<PageNotFound />} />
    </Switch>
  </Router>
);

export default App;
