//import React from "react";
import React, { useState } from 'react';
import {
	IonContent,
	IonHeader,
	IonPage,
	IonSearchbar,
	IonTitle,
	IonToolbar,
} from "@ionic/react";

const Header: React.FC = () => {
	const [searchText, setSearchText] = useState('');
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color="primary">
					<IonTitle>Pokémon</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonSearchbar color="danger" value={searchText} onIonChange={e => {setSearchText(e.detail.value!)}}></IonSearchbar>
			</IonContent>
			
		</IonPage>
	);
};

export default Header;
