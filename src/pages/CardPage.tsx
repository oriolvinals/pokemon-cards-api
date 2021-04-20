import {
	IonButtons,
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { sparkles, sparklesOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { getCard } from "../services/Api";
import PriceCard from "../components/Cards/PriceCard";
import InfoCard from "../components/Cards/InfoCard";
import Attacks from "../components/Cards/Attacks";
import Rules from "../components/Cards/Rules";
import AdditionalInfo from "../components/Cards/AdditionalInfo";
import Abilities from "../components/Cards/Abilities";
import Set from "../components/Cards/Set";
import Legalities from "../components/Cards/Legalities";
import { useUser, useFirestoreDocData, useFirestore } from "reactfire";
import Pagination from "../components/Cards/Pagination";

interface ParamType {
	id: string;
}

interface Props {
	status: string;
	data: any;
}

interface Sets {
	sets?: Array<{
		id: string;
		name: string;
		image: string;
		totalCards: number;
		cards: Array<{
			id: string;
			name: string;
			image: string;
		}>;
	}>;
}

const CardPage = () => {
	const { id } = useParams<ParamType>();
	const [card, setCard] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [dataLoading, setDataLoading] = useState(false);
	const [holo, setHolo] = useState(false);
	const [save, setSave] = useState(false);

	useEffect(() => {
		const getCardInfo = async () => {
			setIsLoading(true);
			const data = await getCard(id);
			setCard(data.data);
			setIsLoading(false);
			setDataLoading(true);
		};

		getCardInfo();
	}, [id]);

	const currentUser = useUser();
	const userData = useFirestore()
		.collection("users")
		.doc(currentUser.data?.uid);
	const { status, data }: Props = useFirestoreDocData(userData);
	console.log(data);

	const handleHolo = () => {
		setHolo(!holo);
	};

	const handleSave = () => {
		setSave(!save);
	};

	const nonHolo = ["Common", "Uncommon", "Rare"];

	return (
		<>
			{dataLoading && (
				<IonPage>
					<IonHeader>
						<IonToolbar>
							<IonButtons slot="start">
								<IonMenuButton />
							</IonButtons>
							<div className="flex flex-row justify-between mr-4">
								<IonTitle className="text-center">
									{card.name}
								</IonTitle>
								{!nonHolo.includes(card.rarity) && (
									<IonIcon
										onClick={handleHolo}
										size="large"
										md={holo ? sparkles : sparklesOutline}
										ios={holo ? sparkles : sparklesOutline}
									/>
								)}
							</div>
						</IonToolbar>
						<Loader loading={isLoading} />
					</IonHeader>

					<IonContent fullscreen>
						<IonHeader collapse="condense">
							<IonToolbar>
								<IonTitle size="large">{card.name}</IonTitle>
								{!nonHolo.includes(card.rarrity) && (
									<IonIcon
										onClick={handleHolo}
										size="large"
										md={holo ? sparkles : sparklesOutline}
										ios={holo ? sparkles : sparklesOutline}
									/>
								)}
							</IonToolbar>
						</IonHeader>
						<div className="px-7 grid grid-cols-1 gap-y-4 pb-5 bg-gradient-to-r from-blue-900 to-gray-900">
							<InfoCard
								name={card.name}
								supertype={card.supertype}
								subtypes={card.subtypes}
								hp={card.hp}
								type={card.types}
								image={card.images.large}
								flavor={card.flavorText}
								holo={holo}
							/>
							<Pagination
								id={card.id}
								total={card.set.printedTotal}
							/>
							<PriceCard tcgplayer={card.tcgplayer} />
							<Abilities abilities={card.abilities} />
							<Attacks attacks={card.attacks} />
							<Rules rules={card.rules} />
							<AdditionalInfo
								weaknesses={card.weaknesses}
								resistances={card.resistances}
								retreatCost={card.retreatCost}
								artist={card.artist}
								rarity={card.rarity}
								number={card.number}
								totalNumber={card.set.printedTotal}
							/>
							<Set set={card.set} />
							<Legalities legalities={card.legalities} />
							{status === "success" && (
								<IonFab
									vertical="bottom"
									horizontal="end"
									slot="fixed"
									className="bg-transparent"
								>
									<IonFabButton>
										<IonIcon
											onClick={handleSave}
											icon={
												save
													? "/assets/icon/fav.svg"
													: "/assets/icon/fav_default.svg"
											}
											className="h-10 w-10"
										/>
									</IonFabButton>
								</IonFab>
							)}
						</div>
					</IonContent>
				</IonPage>
			)}
		</>
	);
};

export default CardPage;
