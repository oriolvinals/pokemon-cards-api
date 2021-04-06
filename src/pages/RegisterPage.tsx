import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import RegisterA from "../components/Register/RegisterA";

interface Title {
	name: string;
}

const RegisterPage = ({ name }: Title) => {
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
					<RegisterA />
				</div>
			</IonContent>
		</IonPage>
	);
};

export default RegisterPage;
