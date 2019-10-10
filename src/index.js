import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import ReactDOM from "react-dom";
import "./styles.css";
import { LoginProvider } from "./contexts/LoginContext";

// == INSCRIPTION IMPORT == //
const HomePage = lazy(() => import("./pages/Inscription/HomePage"));
const Inscription = lazy(() => import("./pages/Inscription/Registration"));
const Confirmation = lazy(() => import("./pages/Inscription/Confirm"));
const Connexion = lazy(() => import("./pages/Inscription/Login"));
const GeneralInformations = lazy(() =>
  import("./pages/Inscription/Step/GeneralInformations")
);
const GeneralInformationsPlace = lazy(() =>
  import("./pages/Inscription/Step/GeneralInformationsPlace")
);
const GenralInformationsEnd = lazy(() =>
  import("./pages/Inscription/Step/GenralInformationsEnd")
);
const CurrentSituation = lazy(() =>
  import("./pages/Inscription/Step/CurrentSituation")
);
const CurrentSituationInstitution = lazy(() =>
  import("./pages/Inscription/Step/CurrentSituationInstitution")
);
const CurrentSituationEnd = lazy(() =>
  import("./pages/Inscription/Step/CurrentSituationEnd")
);
const FormationWishes = lazy(() =>
  import("./pages/Inscription/Step/FormationWishes")
);
const FormationWishesInstitution = lazy(() =>
  import("./pages/Inscription/Step/FormationWishesInstitution")
);
const FormationWishesEnd = lazy(() =>
  import("./pages/Inscription/Step/FormationWishesEnd")
);
const AdditionalDocuments = lazy(() =>
  import("./pages/Inscription/Step/AdditionalDocuments")
);
const PasswordReset = lazy(() => import("./pages/Inscription/PasswordReset"));
const UserReset = lazy(() => import("./pages/Inscription/UserReset"));
const Recap = lazy(() => import("./pages/Inscription/Recap"));
const UnknownPage = lazy(() => import("./pages/Inscription/404.js"));

// == DASHBOARD IMPORT == //
const Tasks = lazy(() => import("./pages/Dashboard-User/pages/Tasks"));
const Dashboard = lazy(() => import("./pages/Dashboard-User/Dashboard"));
const ResultsGraph = lazy(() =>
  import("./pages/Dashboard-User/pages/ResultsGraph")
);
const Tutorials = lazy(() => import("./pages/Dashboard-User/pages/Tutorial"));

// == DASHBOARD ADMIN IMPORT == //
const DashboardAdmin = lazy(() => import("./pages/Dashboard-Admin/Homepage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loader">
          <div className="outer" />
          <div className="middle" />
          <div className="inner" />
        </div>
      }
    >
      <LoginProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/inscription" component={Inscription} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/connexion" component={Connexion} />
          <Route exact path="/renseignement" component={GeneralInformations} />
          <Route
            exact
            path="/renseignement/informations-personnelles"
            component={GeneralInformationsPlace}
          />
          <Route
            exact
            path="/renseignement/fin"
            component={GenralInformationsEnd}
          />
          <Route
            exact
            path="/situation-actuelle"
            component={CurrentSituation}
          />
          <Route
            exact
            path="/situation-actuelle/etablissement"
            component={CurrentSituationInstitution}
          />
          <Route
            exact
            path="/situation-actuelle/fin"
            component={CurrentSituationEnd}
          />
          <Route exact path="/voeux-formation" component={FormationWishes} />
          <Route
            exact
            path="/voeux-formation/campus"
            component={FormationWishesInstitution}
          />
          <Route
            exact
            path="/voeux-formation/fin"
            component={FormationWishesEnd}
          />
          <Route
            exact
            path="/pieces-complementaires"
            component={AdditionalDocuments}
          />
          <Route
            exact
            path="/reinitialisation-identifiant"
            component={UserReset}
          />
          <Route
            exact
            path="/reinitialisation-mot-de-passe"
            component={PasswordReset}
          />
          <Route exact path="/recapitulatif" component={Recap} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/aide" component={Tutorials} />
          <Route exact path="/taches" component={Tasks} />
          <Route exact path="/resultats" component={ResultsGraph} />
          <Route exact path="/administration" component={DashboardAdmin} />
          <Route path="*" component={UnknownPage} />
        </Switch>
      </LoginProvider>
    </Suspense>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
