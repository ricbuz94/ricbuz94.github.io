import { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import FallbackComponent from "./ui/FallbackComponent";

const Home = lazy(() => import("./pages/Home"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const DrinkToolPolicy = lazy(() => import("./pages/DrinkToolPolicy"));

const App = () => (
  <Router>
    <Suspense fallback={<FallbackComponent />}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/drinktool-policy">
          <DrinkToolPolicy />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
