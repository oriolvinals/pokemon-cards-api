import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "./index.css";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import SetsPage from "./pages/SetsPage";
import SetCardsPage from "./pages/SetCardsPage";
import CardPage from "./pages/CardPage";
import SearchPage from "./pages/SearchPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonSplitPane contentId="main">
				<Menu />
				<IonRouterOutlet id="main">
					<Route path="/" exact={true}>
						<HomePage name="Home" />
					</Route>
					<Route path="/sets" exact={true}>
						<SetsPage name="Sets" />
					</Route>
					<Route path="/sets/:id">
						<SetCardsPage />
					</Route>
					<Route path="/cards/:id">
						<CardPage />
					</Route>
					<Route path="/search/:query" exact={true}>
						<SearchPage name="Search" />
					</Route>
				</IonRouterOutlet>
			</IonSplitPane>
		</IonReactRouter>
	</IonApp>
);

export default App;
