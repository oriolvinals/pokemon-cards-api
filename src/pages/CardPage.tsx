import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { getCard } from "../services/Api";
import PriceCard from "../components/Cards/PriceCard";
import InfoCard from "../components/Cards/InfoCard";

interface ParamType {
	id: string;
}
const CardPage = () => {
	const { id } = useParams<ParamType>();
	const [card, setCard] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [dataLoading, setDataLoading] = useState(false);

	useEffect(() => {
		const getCardInfo = async () => {
			setIsLoading(true);
			const data = await getCard(id);
			console.log(await data);
			setCard(data.data);
			setIsLoading(false);
			setDataLoading(true);
		};

		getCardInfo();
	}, [id]);
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{card.name}</IonTitle>
				</IonToolbar>

				<Loader loading={isLoading} />
			</IonHeader>

			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{card.name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<div className="p-3">
					<InfoCard
						name={card.name}
						supertype={card.supertype}
						subtypes={card.subtypes}
						hp={card.hp}
						type={card.type}
						image={card.images.large}
						loading={dataLoading}
					/>
					<PriceCard
						tcgplayer={card.tcgplayer}
						loading={dataLoading}
					/>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default CardPage;
