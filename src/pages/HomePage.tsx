import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import Search from "../components/Home/Search";

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
				<div className="absolute w-full h-full bg-green-300 ">
					<img
						className="absolute w-full h-full object-cover"
						src="/assets/images/home.jpg"
						alt="Charmander" 
						
					/>
					<Search />
				</div>
			</IonContent>
		</IonPage>
	);
};

export default HomePage;
