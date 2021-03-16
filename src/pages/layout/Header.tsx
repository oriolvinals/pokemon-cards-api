import React from "react";

import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

const Header: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="red">
					<IonTitle>Pokémon</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar color="primary">
						<IonTitle size="large">Pokémon</IonTitle>
					</IonToolbar>
				</IonHeader>
			</IonContent>
		</IonPage>
	);
};

export default Header;
