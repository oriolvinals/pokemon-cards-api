//import React from "react";
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="primary">
					<IonTitle>Pokémon</IonTitle>
				</IonToolbar>
			</IonHeader>
		</IonPage>
	);
};

export default Header;
