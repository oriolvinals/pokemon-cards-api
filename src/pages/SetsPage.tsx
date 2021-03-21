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
import Loader from "../components/Loader";

interface Title {
	name: string;
}

export const SetsPage = ({ name }: Title) => {
	const [searchText, setSearchText] = useState("");
	const [sets, setSets] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [dataLoading, setDataLoading] = useState<boolean>(false);

	useEffect(() => {
		const getSetsFromApi = async () => {
			setIsLoading(true);
			const data = await getSets();
			setSets(data.data);
			setIsLoading(false);
			setDataLoading(true);
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
				<div className="bg-black">
					<IonSearchbar
						value={searchText}
						onIonChange={(e) => setSearchText(e.detail.value!)}
					></IonSearchbar>
				</div>
				<Loader loading={isLoading} />
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<SetsData sets={getFilteredSets()} data={dataLoading} />
			</IonContent>
		</IonPage>
	);
};

export default SetsPage;
