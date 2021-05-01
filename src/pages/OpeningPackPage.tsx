import {
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { reloadOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import OpeningPack from "../components/OpeningPack/OpeningPack";
import { getCardsFromSet, getSet } from "../services/Api";

interface ParamType {
	id: string;
}

const OpeningPackPage = () => {
	const { id } = useParams<ParamType>();

	const [reloading, setReloading] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [set, setSetInfo] = useState<any>({});
	const [cards, setCards] = useState<any[]>([]);

	const handleReload = async () => {
		setReloading(true);
		await delay(1000);
		setReloading(false);
	};
	const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

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
		};

		getSetInfoFromApi();
		getSetCardsFromApi();
	}, [id]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<div className="flex flex-row justify-between mr-4 items-center">
						<IonTitle>{"Opening pack"}</IonTitle>
						<IonIcon
							onClick={handleReload}
							size="large"
							md={reloadOutline}
							ios={reloadOutline}
							className={reloading ? "animate-spin" : ""}
						/>
					</div>
				</IonToolbar>
				<Loader loading={isLoading} />
			</IonHeader>

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{"Opening pack"}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<OpeningPack reloading={reloading} set={set} cards={cards} />
			</IonContent>
		</IonPage>
	);
};

export default OpeningPackPage;
