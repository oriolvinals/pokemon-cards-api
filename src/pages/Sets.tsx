import { useState } from "react";
import { IonPage, IonSearchbar } from "@ionic/react";
import Header from "./layout/Header";
import SetsData from "../components/SetsData";

const Sets = () => {
	const [searchText, setSearchText] = useState("");

	return (
		<IonPage>
			<Header />
			<IonSearchbar
				value={searchText}
				onIonChange={(e) => setSearchText(e.detail.value!)}
			></IonSearchbar>
			<SetsData name={searchText} />
		</IonPage>
	);
};

export default Sets;
