import SelectOption from "./SelectOption";
import Input from "../Advanced/Input";
import {
	IonButton,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonRange,
} from "@ionic/react";
import React from "react";
import RangeValue from "./RangeValue";

const SearchA = () => {
	const array = ["a", "b"];
	return (
		<div>
			<Input name="Card Name" />
			<SelectOption name="Supertype" options={array} />
			<SelectOption name="Subtypes" options={array} />
			<SelectOption name="Set" options={array} />
			<SelectOption name="Series" options={array} />
			<Input name="Artist" />
			<SelectOption name="Rarity" options={array} />
			<RangeValue min={100} max={200} />
			<IonButton>Search</IonButton>
		</div>
	);
};

export default SearchA;
