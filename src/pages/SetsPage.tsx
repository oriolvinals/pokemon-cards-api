import React, { useEffect, useState } from "react";
import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonSearchbar,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import SetsData from "../components/Sets/SetsData";
import { getSets } from "../services/Api";

interface Title {
	name: string;
}

export const SetsPage = ({ name }: Title) => {
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
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
				<IonSearchbar
					value={searchText}
					onIonChange={(e) => setSearchText(e.detail.value!)}
				></IonSearchbar>
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<SetsData sets={getFilteredSets()} />
			</IonContent>
		</IonPage>
	);
};

export default SetsPage;
