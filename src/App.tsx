import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "./index.css";
import Header from "./pages/layout/Header";
import Footer from "./pages/layout/Footer";
import Home from "./pages/Home";
import Sets from "./pages/Sets";
import SetCards from "./pages/SetCards";

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
		<IonPage>
			<Header />
			<IonReactRouter>
				<IonRouterOutlet>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/sets/:id" children={<SetCards />} />
					<Route exact path="/sets">
						<Sets />
					</Route>
					<Route path="/card/:id"></Route>
				</IonRouterOutlet>
			</IonReactRouter>
			<Footer />
		</IonPage>
	</IonApp>
);

export default App;
