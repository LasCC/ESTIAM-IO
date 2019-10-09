import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import { LoginProvider } from "./contexts/LoginContext";

// == INSCRIPTION IMPORT == //
const HomePage = lazy(() => import("./pages/Inscription/HomePage"));
const Inscription = lazy(() => import("./pages/Inscription/Inscription"));
const Confirmation = lazy(() => import("./pages/Inscription/Confirmation"));
const Connexion = lazy(() => import("./pages/Inscription/Connexion"));
const Renseignement = lazy(() =>
	import("./pages/Inscription/Step/Renseignement1")
);
const Renseignement2 = lazy(() =>
	import("./pages/Inscription/Step/Renseignement2")
);
const FinRensignement = lazy(() =>
	import("./pages/Inscription/Step/FinRensignement")
);
const SituationActuelle = lazy(() =>
	import("./pages/Inscription/Step/SituationActuelle1")
);
const SituationActuelle2 = lazy(() =>
	import("./pages/Inscription/Step/SituationActuelle2")
);
const SituationActuelleFin = lazy(() =>
	import("./pages/Inscription/Step/SituationActuelleFin")
);
const VoeuxFormation = lazy(() =>
	import("./pages/Inscription/Step/VoeuxFormation")
);
const VoeuxFormation2 = lazy(() =>
	import("./pages/Inscription/Step/VoeuxFormation2")
);
const VoeuxFormationFin = lazy(() =>
	import("./pages/Inscription/Step/VoeuxFormationFin")
);
const PieceSuplementaire = lazy(() =>
	import("./pages/Inscription/Step/PieceSuplementaire")
);
const ReinitalisationMotdepasse = lazy(() =>
	import("./pages/Inscription/ReinitalisationMotdepasse")
);
const ReinitialisationIdentifiant = lazy(() =>
	import("./pages/Inscription/ReinitialisationIdentifiant")
);
const Recapitulatif = lazy(() => import("./pages/Inscription/Recapitulatif"));
const UnknownPage = lazy(() => import("./pages/Inscription/UnknownPage"));

// == DASHBOARD IMPORT == //
const Todo = lazy(() => import("./pages/Dashboard-User/pages/Todo"));
const Dashboard = lazy(() => import("./pages/Dashboard-User/Dashboard"));
const Resultats = lazy(() => import("./pages/Dashboard-User/pages/Charts"));
const Tutoriels = lazy(() => import("./pages/Dashboard-User/pages/Tutoriels"));

// == DASHBOARD ADMIN IMPORT == //
const DashboardAdmin = lazy(() => import("./pages/Dashboard-Admin/Homepage"));

function App() {
	return (
		<Container maxWidth="lg">
			<Suspense
				fallback={
					<div className="loader">
						<div className="outer" />
						<div className="middle" />
						<div className="inner" />
					</div>
				}
			>
				{/* <LoginProvider> */}
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/inscription" component={Inscription} />
					<Route exact path="/confirmation" component={Confirmation} />
					<Route exact path="/connexion" component={Connexion} />
					<Route exact path="/renseignement" component={Renseignement} />
					<Route
						exact
						path="/renseignement/informations-personnelles"
						component={Renseignement2}
					/>
					<Route exact path="/renseignement/fin" component={FinRensignement} />
					<Route
						exact
						path="/situation-actuelle"
						component={SituationActuelle}
					/>
					<Route
						exact
						path="/situation-actuelle/etablissement"
						component={SituationActuelle2}
					/>
					<Route
						exact
						path="/situation-actuelle/fin"
						component={SituationActuelleFin}
					/>
					<Route exact path="/voeux-formation" component={VoeuxFormation} />
					<Route
						exact
						path="/voeux-formation/campus"
						component={VoeuxFormation2}
					/>
					<Route
						exact
						path="/voeux-formation/fin"
						component={VoeuxFormationFin}
					/>
					<Route
						exact
						path="/pieces-complementaires"
						component={PieceSuplementaire}
					/>
					<Route
						exact
						path="/reinitialisation-identifiant"
						component={ReinitialisationIdentifiant}
					/>
					<Route
						exact
						path="/reinitialisation-mot-de-passe"
						component={ReinitalisationMotdepasse}
					/>
					<Route exact path="/recapitulatif" component={Recapitulatif} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/aide" component={Tutoriels} />
					<Route exact path="/taches" component={Todo} />
					<Route exact path="/resultats" component={Resultats} />
					<Route exact path="/administration" component={DashboardAdmin} />
					<Route path="*" component={UnknownPage} />
				</Switch>
				{/* </LoginProvider> */}
			</Suspense>
		</Container>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
);
