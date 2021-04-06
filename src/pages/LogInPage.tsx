import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import LoginA from "../components/Login/LoginA";

interface Title {
	name: string;
}

const LogInPage = ({ name }: Title) => {
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

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{name}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<div className="absolute w-full h-full">
					<img
						className="absolute w-full h-full object-cover"
						src="/assets/images/fons.png"
						alt="Charmander"
					/>
					<LoginA />
				</div>
			</IonContent>
		</IonPage>
	);
};

export default LogInPage;
