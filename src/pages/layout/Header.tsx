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
		</IonPage>
	);
};

export default Header;
