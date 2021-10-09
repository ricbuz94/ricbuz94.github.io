import { useEffect } from "react";
import Navbar from "../../ui/navbar/Navbar";
import DtCard from "../../ui/dt-card/DtCard";
import Select from "../../ui/select/Select";
import Form from "../../components/Form";
import { Sex } from "../../common/interfaces";
import { Contact, DrinkToolPolicy, PageNotFound } from "../index";
import { Route, Switch, useRouteMatch, useLocation } from "react-router-dom";

const DrinkTool = () => {
  useEffect(() => {
    let title = document.getElementById("title");
    if (title != null) title.innerHTML = "DrinkTool - Web";
  }, []);

  let location = useLocation();
  let match = useRouteMatch();
  return (
    <div className="dt-div">
      {location.pathname === `${match.path}/policy` ? null : (
        <Navbar match={match} />
      )}
      <Switch>
        <Route exact path={match.path}>
          <main>
            <DtCard>
              <Form title="Calcolo della quantità di bevanda alcolica che è possibile ingerire prima di superare il limite di legge.">
                <div className="form-grid">
                  <Select title="Sex" options={[Sex.male, Sex.female]} />
                </div>
              </Form>
            </DtCard>
          </main>
        </Route>
        <Route path={`${match.path}/contact`}>
          <Contact />
        </Route>
        <Route path={`${match.path}/policy`}>
          <DrinkToolPolicy />
        </Route>
        <Route path={`${match.path}/*`}>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default DrinkTool;
