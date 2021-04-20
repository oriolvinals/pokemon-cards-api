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

interface Title {
	name: string;
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

	const sets = ["", "", ""];

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
							sets={34}
							holoCards={32}
							cards={23}
						/>
						<Sets sets={sets} />
					</div>
				)}
				{status === "error" && <div>error</div>}
			</IonContent>
		</IonPage>
	);
};

export default UserPage;
