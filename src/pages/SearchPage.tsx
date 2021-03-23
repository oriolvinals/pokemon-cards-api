import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import SearchData from "../components/Search/SearchData";
import { getSearch } from "../services/Api";

interface Title {
	name: string;
}

interface Params {
	query: string;
}

const SearchPage = ({ name }: Title) => {
	const { query }: Params = useParams();
	const [cards, setQuery] = useState<any>({});
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getSearchFromApi = async () => {
			setIsLoading(true);
			const data = await getSearch(query);
			setQuery(data.data);
			setIsLoading(false);
		};
		getSearchFromApi();
	}, [query]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
				<Loader loading={isLoading} />
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<SearchData cards={cards} />
			</IonContent>
		</IonPage>
	);
};

export default SearchPage;
