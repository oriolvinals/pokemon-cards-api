import React, { useState } from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
	const [searchText, setSearchText] = useState("");

	return (
		<IonHeader>
			<IonToolbar color="primary">
				<IonTitle>Pokémon</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
