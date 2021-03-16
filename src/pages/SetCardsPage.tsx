import React, { useEffect, useState } from "react";
import { IonPage, IonSearchbar } from "@ionic/react";
import Header from "./layout/Header";
import { IonContent } from "@ionic/react";
import { useParams } from "react-router";
import SetCardsData from "../components/SetCardsData";
import SetInfo from "../components/SetInfo";
import { getSet, getCardsFromSet } from "../services/Api";

interface ParamType {
	id: string;
}

const SetCardsPage = () => {
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
			<Header />
			<IonSearchbar
				value={searchText}
				onIonChange={(e) => setSearchText(e.detail.value!)}
			></IonSearchbar>
			<IonContent>
				<SetInfo info={set} />
				<SetCardsData cards={getFilteredCards()} />
			</IonContent>
		</IonPage>
	);
};

export default SetCardsPage;
