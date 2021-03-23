import React, { useEffect, useState } from "react";
import {
	IonButtons,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonSearchbar,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { IonContent } from "@ionic/react";
import { useParams } from "react-router";
import SetCardsData from "../components/SetCards/SetCardsData";
import SetInfo from "../components/SetCards/SetInfo";
import { getSet, getCardsFromSet } from "../services/Api";
import Loader from "../components/Loader";

interface ParamType {
	id: string;
}

const SetCardsPage = () => {
	const { id } = useParams<ParamType>();

	const [searchText, setSearchText] = useState("");

	const [set, setSetInfo] = useState<any>({});
	const [cards, setCards] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [dataLoading, setDataLoading] = useState<boolean>(false);

	useEffect(() => {
		const getSetInfoFromApi = async () => {
			setIsLoading(true);
			const data = await getSet(id);
			setSetInfo(data.data);
		};

		const getSetCardsFromApi = async () => {
			const data = await getCardsFromSet(id);
			setCards(data.data);
			setIsLoading(false);
			setDataLoading(true);
		};

		getSetInfoFromApi();
		getSetCardsFromApi();
	}, [id]);

	const getFilteredCards = () => {
		const filteredCards = cards.filter(({ name }) =>
			name.toLowerCase().includes(searchText.toLowerCase())
		);
		return filteredCards;
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{set.name}</IonTitle>
				</IonToolbar>
				<div className="bg-red-300">
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
						<IonTitle size="large">{set.name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<SetInfo info={set} />
				<SetCardsData
					cards={getFilteredCards()}
					loading={dataLoading}
				/>
			</IonContent>
		</IonPage>
	);
};

export default SetCardsPage;
