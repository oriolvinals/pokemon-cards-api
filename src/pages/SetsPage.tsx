import { useEffect, useState } from "react";
import { IonPage, IonSearchbar } from "@ionic/react";
import Header from "./layout/Header";
import SetsData from "../components/SetsData";
import { getSets } from "../services/Api";

const SetsPage = () => {
	const [searchText, setSearchText] = useState("");
	const [sets, setSets] = useState<any[]>([]);

	useEffect(() => {
		const getSetsFromApi = async () => {
			const data = await getSets();
			setSets(data.data);
		};
		getSetsFromApi();
	}, []);

	const getFilteredSets = () => {
		const filteredSets = sets.filter(({ name }) =>
			name.toLowerCase().includes(searchText.toLowerCase())
		);
		return filteredSets;
	};

	return (
		<IonPage>
			<Header />
			<IonSearchbar
				value={searchText}
				onIonChange={(e) => setSearchText(e.detail.value!)}
			></IonSearchbar>
			<SetsData sets={getFilteredSets()} />
		</IonPage>
	);
};

export default SetsPage;
