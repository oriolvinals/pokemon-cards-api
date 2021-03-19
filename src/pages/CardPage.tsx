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

interface ParamType {
	id: string;
}
const CardPage = () => {
	const { id } = useParams<ParamType>();
	const [card, setCard] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getCardInfo = async () => {
			setIsLoading(true);
			const data = await getCard(id);
			setCard(data.data);
			setIsLoading(false);
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
				<div>{card.name}</div>
			</IonContent>
		</IonPage>
	);
};

export default CardPage;
