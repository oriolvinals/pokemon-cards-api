import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import "firebase/firestore";
import ProfileInfo from "../components/User/ProfileInfo";
import { useFirestoreDocData, useFirestore, useUser } from "reactfire";
import Sets from "../components/User/Sets";
import { useEffect, useState } from "react";

interface Title {
	name: string;
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

interface Props {
	status: string;
	data: any;
}
const UserPage = ({ name }: Title) => {
	const currentUser = useUser();
	const userData = useFirestore()
		.collection("users")
		.doc(currentUser.data.uid);
	const { status, data }: Props = useFirestoreDocData(userData);

	const [cards, setCards] = useState(0);
	const [holos, setHolos] = useState(0);

	useEffect(() => {
		if (data) {
			let cards_number = 0;
			let holos_number = 0;
			data.sets.map((s: any) => {
				s.cards.map((c: any) => {
					cards_number++;
					if (c.holo) {
						holos_number++;
					}
				});
			});
			setCards(cards_number);
			setHolos(holos_number);
		}
	}, [data]);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{name}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{status === "success" && (
					<div>
						<ProfileInfo
							username={data.username}
							image={data.image}
							email={data.email}
							sets={data.sets.length}
							holoCards={holos}
							cards={cards}
						/>
						<Sets sets={data.sets} />
					</div>
				)}
				{status === "error" && <div>error</div>}
			</IonContent>
		</IonPage>
	);
};

export default UserPage;
