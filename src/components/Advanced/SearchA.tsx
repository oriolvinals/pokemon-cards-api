import SelectOption from "./SelectOption";
import Input from "../Advanced/Input";
import {
	IonButton,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonRange,
} from "@ionic/react";
import RangeValue from "./RangeValue";
import { useHistory } from "react-router";
import { search } from "ionicons/icons";

const SearchA = () => {
	const history = useHistory();

	const array = ["a", "b"];

	const Search = () => {
		history.push("/search/name:");
	};
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
			<IonButton onClick={Search}>Search</IonButton>
		</div>
	);
};

export default SearchA;
