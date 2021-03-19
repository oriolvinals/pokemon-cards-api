import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

interface Title {
	name: string;
}

const HomePage = ({ name }: Title) => {
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
				<div className="absolute w-full h-full bg-green-300">
					<img
						className="w-full h-full"
						src="/assets/images/home.jpg"
						alt="Charmander"
					/>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
