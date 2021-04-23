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
import { cardSharp, sparkles, sparklesOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../components/Loader";
import { getCard, getTotalCountFromSet } from "../services/Api";
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
import firebase from "firebase";

interface ParamType {
	id: string;
}

interface Props {
	status: string;
	data: any;
}

interface Sets {
	id: string;
	name: string;
	image: string;
	totalCards: number;
	cards: Array<{
		id: string;
		name: string;
		image: string;
	}>;
}

interface Card {
	id: string;
	name: string;
	image: string;
}

const CardPage = () => {
	const { id } = useParams<ParamType>();
	const [card, setCard] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [dataLoading, setDataLoading] = useState(false);
	const [holo, setHolo] = useState(false);
	const [save, setSave] = useState(false);
	const [totalCount, setTotalCount] = useState<number>(0);

	useEffect(() => {
		const getCardInfo = async () => {
			setIsLoading(true);
			const data = await getCard(id);
			setCard(data.data);
			const ext = await data.data.id.split("-");
			const count = await getTotalCountFromSet(ext[0]);
			setTotalCount(count.totalCount);

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

	useEffect(() => {
		if (currentUser.data) {
			const CheckCard = (sets: Array<any>) => {
				let exists = false;
				// eslint-disable-next-line array-callback-return
				sets.map((set: Sets) => {
					console.table(set.cards);
					// eslint-disable-next-line array-callback-return
					set.cards.map((c: Card) => {
						if (c.id === id) {
							exists = true;
						}
					});
				});
				return exists;
			};

			if (data) {
				if (data.sets.length !== 0) {
					setSave(CheckCard(data.sets));
				}
			}
		}
	}, [data, id, currentUser]);

	const AddCard = async () => {
		let setExists = false;
		let indexSet = 0;
		data.sets.map((s: any, i: number) => {
			if (s.id === card.set.id) {
				indexSet = i;
				setExists = true;
			}
		});

		if (setExists) {
			let c = { id: card.id, name: card.name, image: card.images.small };
			data.sets[indexSet].cards.push(c);

			await firebase
				.firestore()
				.collection("users")
				.doc(currentUser.data.uid)
				.set(data);
		} else {
			let c: Array<{}> = [];
			c.push({ id: card.id, name: card.name, image: card.images.small });
			data.sets.push({
				id: card.set.id,
				name: card.set.name,
				image: card.set.images.logo,
				totalCards: card.set.total,
				cards: c,
			});

			await firebase
				.firestore()
				.collection("users")
				.doc(currentUser.data.uid)
				.set(data);
		}
	};

	const DeleteCard = async () => {
		data.sets.map((s: any, i: number) => {
			s.cards.map((c: any, j: number) => {
				if (c.id === id) {
					data.sets[i].cards.splice(j, 1);
				}
			});
		});

		await firebase
			.firestore()
			.collection("users")
			.doc(currentUser.data.uid)
			.set(data);
	};

	const handleHolo = () => {
		setHolo(!holo);
	};

	const handleSave = () => {
		setSave(!save);

		if (!save) {
			AddCard();
		} else {
			DeleteCard();
		}
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

					<IonContent>
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
							<Pagination id={card.id} total={totalCount} />
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
