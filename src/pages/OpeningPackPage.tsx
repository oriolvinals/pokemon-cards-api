import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import OpeningPack from "../components/OpeningPack/OpeningPack";
const OpeningPackPage = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{"Opening pack"}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{"Opening pack"}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<OpeningPack />
			</IonContent>
		</IonPage>
	);
};

export default OpeningPackPage;
