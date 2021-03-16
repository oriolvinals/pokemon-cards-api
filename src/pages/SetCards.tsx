import React from "react";
import { IonPage } from "@ionic/react";
import Header from "./layout/Header";
import SetCardsData from "../components/SetCardsData";

const SetCards: React.FC = () => {
	return (
		<IonPage>
			<Header />
			<SetCardsData />
		</IonPage>
	);
};

export default SetCards;
