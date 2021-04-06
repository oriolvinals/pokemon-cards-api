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
import Attacks from "../components/Cards/Attacks";
import Rules from "../components/Cards/Rules";
import AdditionalInfo from "../components/Cards/AdditionalInfo";

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

	if (!dataLoading)
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
				</IonContent>
			</IonPage>
		);

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
				<div className="px-7 grid grid-cols-1 gap-y-5 my-5">
					<InfoCard
						name={card.name}
						supertype={card.supertype}
						subtypes={card.subtypes}
						hp={card.hp}
						type={card.types}
						image={card.images.large}
					/>
					<PriceCard tcgplayer={card.tcgplayer} />
					<Attacks attacks={card.attacks} />
					<Rules rules={card.rules} />
					<AdditionalInfo />
				</div>
			</IonContent>
		</IonPage>
	);
};

export default CardPage;
