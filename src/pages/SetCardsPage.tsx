import React, { useEffect, useState } from "react";
import {
	IonButtons,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonSearchbar,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { IonContent } from "@ionic/react";
import { useHistory, useParams } from "react-router";
import SetCardsData from "../components/SetCards/SetCardsData";
import SetInfo from "../components/SetCards/SetInfo";
import { getSet, getCardsFromSet } from "../services/Api";
import Loader from "../components/Loader";
import { albumsOutline } from "ionicons/icons";

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
	const history = useHistory();

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

	const handleOpening = () => {
		history.push("/opening/" + id);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<div className="flex flex-row justify-between mr-4 items-center">
						<IonTitle>{set.name}</IonTitle>
						<IonIcon
							onClick={handleOpening}
							size="large"
							md={albumsOutline}
							ios={albumsOutline}
						/>
					</div>
				</IonToolbar>
				<div className="bg-black">
					<IonSearchbar
						value={searchText}
						onIonChange={(e) => setSearchText(e.detail.value!)}
					></IonSearchbar>
				</div>
				<Loader loading={isLoading} />
			</IonHeader>

			<IonContent color="dark">
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{set.name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="bg-gradient-to-r from-gray-900 to-blue-900 min-w-full">
					<SetInfo info={set} />
					<SetCardsData
						cards={getFilteredCards()}
						loading={dataLoading}
					/>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default SetCardsPage;
