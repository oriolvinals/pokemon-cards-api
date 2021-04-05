import SelectOption from "./SelectOption";
import Input from "../Advanced/Input";
import { IonButton } from "@ionic/react";
import RangeValue from "./RangeValue";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import {
	getRarities,
	getSets,
	getSubtypes,
	getSupertypes,
	getTypes,
} from "../../services/Api";

const SearchA = () => {
	const [supertypes, setSupertypes] = useState<Array<string>>([]);
	const [subtypes, setSubtypes] = useState<Array<string>>([]);
	const [sets, setSets] = useState<Array<string>>([]);
	const [rarities, setRarities] = useState<Array<string>>([]);
	const [types, setTypes] = useState<Array<string>>([]);

	const array = ["a", "b"];

	useEffect(() => {
		const getSupertyesFromApi = async () => {
			const data = await getSupertypes();
			setSupertypes(data.data);
		};

		const getSubtypesFromApi = async () => {
			const data = await getSubtypes();
			setSubtypes(data.data);
		};

		const getSetsFromApi = async () => {
			const data = await getSets();
			const sets = data.data.map((set: any) => {
				return set.name;
			});
			setSets(sets);
		};

		const getRaritiesFromApi = async () => {
			const data = await getRarities();
			setRarities(data.data);
		};

		const getTypesFromApi = async () => {
			const data = await getTypes();
			setTypes(data.data);
		};

		getSupertyesFromApi();
		getSubtypesFromApi();
		getSetsFromApi();
		getRaritiesFromApi();
		getTypesFromApi();
	}, []);

	const history = useHistory();

	const [name, setName] = useState("");
	const [supertypesSelect, setSupertypesSelect] = useState("");
	const [subtypesSelect, setSubtypesSelect] = useState("");

	const [artist, setArtist] = useState("");

	const handleName = (evt: any) => {
		if (evt.target.value.length === 0) setName("");
		else
			setName(
				"name:" +
					evt.target.value.trim().replace(/ /g, "").replace(":", "") +
					"*"
			);
	};

	const handleArtist = (evt: any) => {
		if (evt.target.value.length === 0) setArtist("");
		else
			setArtist(
				" artist:" +
					evt.target.value.trim().replace(/ /g, "").replace(":", "") +
					"*"
			);
	};

	const handleSupertype = (evt: any) => {
		if (evt.target.value.length === 0) setSupertypesSelect("");
		else if (evt.target.value.length === 1)
			setSupertypesSelect(" supertype:" + evt.target.value);
		else {
			const sub: Array<string> = evt.target.value.map(
				(supertype: string) => {
					return "supertype:" + supertype;
				}
			);
			setSupertypesSelect(" (" + sub.join(" OR ") + ")");
		}
	};

	const handleSubtype = (evt: any) => {
		if (evt.target.value.length === 0) setSubtypesSelect("");
		else if (evt.target.value.length === 1)
			setSubtypesSelect(" subtypes:" + evt.target.value);
		else {
			const sub: Array<string> = evt.target.value.map(
				(subtype: string) => {
					return "subtypes:" + subtype;
				}
			);
			setSubtypesSelect(" (" + sub.join(" OR ") + ")");
		}
	};

	const Search = () => {
		history.push(
			"/search/" + name + supertypesSelect + subtypesSelect + artist
		);
	};

	return (
		<>
			<div className="flex flex-col space-y-1 mt-1 justify-center ">
				<Input
					onTextChange={handleName}
					name="Card Name"
					placeholder="Enter a Pokemon name"
				/>
				<SelectOption
					onSelectChange={handleSupertype}
					name="Supertype"
					options={supertypes}
					placeholder="Pick a supertype"
				/>
				<SelectOption
					onSelectChange={handleSubtype}
					name="Subtypes"
					options={subtypes}
					placeholder="Pick a subtype"
				/>
				<SelectOption
					name="Types"
					options={types}
					placeholder="Pick a type"
				/>
				<RangeValue name="HP" min={0} max={340} />
				<SelectOption
					name="Weaknesses"
					options={types}
					placeholder="Pick a type"
				/>
				<SelectOption
					name="Resistances"
					options={types}
					placeholder="Pick a type"
				/>
				<RangeValue name="Retreat Cost" min={0} max={5} />

				<SelectOption
					name="Set"
					options={sets}
					placeholder="Pick a set"
				/>
				<SelectOption
					name="Series"
					options={array}
					placeholder="Pick a series"
				/>

				<Input
					onTextChange={handleArtist}
					name="Artist"
					placeholder="Enter an Artist"
				/>
				<SelectOption
					name="Rarity"
					options={rarities}
					placeholder="Pick a rarity"
				/>
			</div>
			<div className="my-2 flex justify-center items-center">
				<IonButton onClick={Search}>Search</IonButton>
			</div>
		</>
	);
};

export default SearchA;
