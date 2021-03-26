import SelectOption from "./SelectOption";
import Input from "../Advanced/Input";
import { IonButton } from "@ionic/react";
import RangeValue from "./RangeValue";
import { useHistory } from "react-router";
import { useState } from "react";

const SearchA = () => {
	const history = useHistory();
	const [query, setQuery] = useState("");

	const array = ["a", "b"];

	const Search = () => {
		history.push("/search/" + query);
	};

	const handleName = (evt: any) => {
		setQuery("name:" + evt.target.value);
	};

	return (
		<div>
			<Input onTextChange={handleName} name="Card Name" />
			<SelectOption name="Supertype" options={array} />
			<SelectOption name="Subtypes" options={array} />
			<SelectOption name="Set" options={array} />
			<SelectOption name="Series" options={array} />
			<SelectOption name="Rarity" options={array} />
			<RangeValue min={100} max={200} />
			<IonButton onClick={Search}>Search</IonButton>
		</div>
	);
};

export default SearchA;
