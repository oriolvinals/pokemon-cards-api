import React, { useState } from "react";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
	const [searchText, setSearchText] = useState("");

	return (
		<IonHeader>
			<IonToolbar color="primary">
				<IonTitle>Pokémon</IonTitle>
				<IonSearchbar
					value={searchText}
					onIonChange={(e) => setSearchText(e.detail.value!)}
				></IonSearchbar>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
