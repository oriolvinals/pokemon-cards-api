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
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Opening from "../components/Opening/Opening";
import { getSets } from "../services/Api";

interface Title {
	name: string;
}

const OpeningPage = ({ name }: Title) => {
	const [searchText, setSearchText] = useState("");
	const [sets, setSets] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [dataLoading, setDataLoading] = useState<boolean>(false);

	useEffect(() => {
		const getSetsFromApi = async () => {
			setIsLoading(true);
			const data = await getSets();
			setSets(data.data.reverse());
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

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<Opening sets={getFilteredSets()} data={dataLoading} />
			</IonContent>
		</IonPage>
	);
};

export default OpeningPage;
