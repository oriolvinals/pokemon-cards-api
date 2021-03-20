import { IonButton, IonInput, IonItem, IonLabel, IonToast } from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
	const [showToast, setShowToast] = useState(false);
	const [searchText, setSearchText] = useState("");
	const history = useHistory();

	const search = () => {
		if (searchText.length <= 3) setShowToast(true);
		else history.push("/search/" + searchText);
	};
	return (
		<div className="fixed z-50 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-60">
			<IonLabel className="bold -mt-48 text-xl p-5 w-full text-center">
				Search a pokemon card
			</IonLabel>
			<IonItem className="rounded-xl w-10/12">
				<IonInput
					value={searchText}
					onIonChange={(e) => setSearchText(e.detail.value!)}
				/>
			</IonItem>
			<IonButton className="mt-3 rounded-xl" onClick={search}>
				Search
			</IonButton>
			<IonLabel className="bold text-sm p-5 text-green-300 w-full text-center">
				Try "venusaur" or "subtypes:mega" or simply Browse By Set
			</IonLabel>
			<IonToast
				isOpen={showToast}
				onDidDismiss={() => setShowToast(false)}
				message="You need to fill search field!"
				duration={2000}
				position="bottom"
			/>
		</div>
	);
};

export default Search;
