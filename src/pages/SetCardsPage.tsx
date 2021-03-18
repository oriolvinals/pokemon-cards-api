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

interface ParamType {
	id: string;
}

interface Title {
	name: string;
}

const SetCardsPage = ({ name }: Title) => {
	const { id } = useParams<ParamType>();

	const [searchText, setSearchText] = useState("");

	const [set, setSetInfo] = useState<any>({});
	const [cards, setCards] = useState<any[]>([]);

	useEffect(() => {
		const getSetInfoFromApi = async () => {
			const data = await getSet(id);
			setSetInfo(data.data);
		};

		const getSetCardsFromApi = async () => {
			const data = await getCardsFromSet(id);
			//console.log(await data.data);
			setCards(data.data);
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
				<SetInfo info={set} />
				<SetCardsData cards={getFilteredCards()} />
			</IonContent>
		</IonPage>
	);
};

export default SetCardsPage;
