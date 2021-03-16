import React from "react";
import { IonPage } from "@ionic/react";
import Header from "./layout/Header";
import SetsData from "../components/SetsData";

const Sets: React.FC = () => {
	return (
		<IonPage>
			<Header />
			<SetsData />
		</IonPage>
	);
};

export default Sets;
