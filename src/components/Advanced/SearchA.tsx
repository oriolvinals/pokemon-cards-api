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

	const queryMultiple = (name: string, array: Array<any>) => {
		const sub: Array<string> = array.map((elem: string) => {
			return name + ":" + elem.toString().replace(/ /g, "\\ ");
		});
		return " (" + sub.join(" OR ") + ")";
	};

	const queryRange = (min: number, max: number, name: string) => {
		return " " + name + ":[" + min + " TO " + max + "]";
	};

	const [name, setName] = useState("");
	const handleName = (evt: any) => {
		if (evt.target.value.length === 0) setName("");
		else
			setName(
				"name:" +
					evt.target.value.trim().replace(/ /g, "").replace(":", "") +
					"*"
			);
	};

	const [artist, setArtist] = useState("");
	const handleArtist = (evt: any) => {
		if (evt.target.value.length === 0) setArtist("");
		else
			setArtist(
				" artist:" +
					evt.target.value.trim().replace(/ /g, "").replace(":", "") +
					"*"
			);
	};

	const [supertypesSelect, setSupertypesSelect] = useState("");
	const handleSupertype = (evt: any) => {
		if (evt.target.value.length === 0) setSupertypesSelect("");
		else if (evt.target.value.length === 1)
			setSupertypesSelect(
				" supertype:" + evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else setSupertypesSelect(queryMultiple("supertype", evt.target.value));
	};

	const [subtypesSelect, setSubtypesSelect] = useState("");
	const handleSubtype = (evt: any) => {
		if (evt.target.value.length === 0) setSubtypesSelect("");
		else if (evt.target.value.length === 1)
			setSubtypesSelect(
				" subtypes:" + evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else setSubtypesSelect(queryMultiple("subtypes", evt.target.value));
	};

	const [typesSelect, setTypesSelect] = useState("");
	const handleType = (evt: any) => {
		if (evt.target.value.length === 0) setTypesSelect("");
		else if (evt.target.value.length === 1)
			setTypesSelect(
				" types:" + evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else setTypesSelect(queryMultiple("types", evt.target.value));
	};

	const [weaknessesSelect, setWeaknessessSelect] = useState("");
	const handleWeaknesses = (evt: any) => {
		if (evt.target.value.length === 0) setWeaknessessSelect("");
		else if (evt.target.value.length === 1)
			setWeaknessessSelect(
				" weaknesses.type:" +
					evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else
			setWeaknessessSelect(
				queryMultiple("weaknesses.type", evt.target.value)
			);
	};

	const [resistancesSelect, setResistancesSelect] = useState("");
	const handleResistances = (evt: any) => {
		if (evt.target.value.length === 0) setResistancesSelect("");
		else if (evt.target.value.length === 1)
			setResistancesSelect(
				" resistances:" +
					evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else
			setResistancesSelect(
				queryMultiple("resistances", evt.target.value)
			);
	};

	const [setsSelect, setSetsSelect] = useState("");
	const handleSets = (evt: any) => {
		if (evt.target.value.length === 0) setSetsSelect("");
		else if (evt.target.value.length === 1)
			setSetsSelect(
				" set.name:" + evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else setSetsSelect(queryMultiple("set.name", evt.target.value));
	};

	const [raritiesSelect, setRaritiesSelect] = useState("");
	const handleRarities = (evt: any) => {
		if (evt.target.value.length === 0) setRaritiesSelect("");
		else if (evt.target.value.length === 1)
			setRaritiesSelect(
				" rarity:" + evt.target.value.toString().replace(/ /g, "\\ ")
			);
		else setRaritiesSelect(queryMultiple("rarity", evt.target.value));
	};

	const [rangeHp, setRangeHp] = useState("");
	const handleHp = (evt: any) => {
		const lower = evt.target.value.lower;
		const upper = evt.target.value.upper;
		const query = queryRange(lower, upper, "hp");
		setRangeHp(query);
	};

	const [rangeCost, setRangeCost] = useState("");
	const handleCost = (evt: any) => {
		const lower = evt.target.value.lower;
		const upper = evt.target.value.upper;
		const query = queryRange(lower, upper, "convertedRetreatCost");
		setRangeCost(query);
	};

	const Search = () => {
		history.push(
			"/search/" +
				name +
				supertypesSelect +
				subtypesSelect +
				typesSelect +
				weaknessesSelect +
				resistancesSelect +
				setsSelect +
				raritiesSelect +
				rangeHp +
				rangeCost +
				artist
		);
	};

	return (
		<>
			<div className="flex flex-col justify-center mt-2">
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
					onSelectChange={handleType}
					name="Types"
					options={types}
					placeholder="Pick a type"
				/>
				<RangeValue
					onRangeChange={handleHp}
					name="HP"
					min={0}
					max={340}
				/>
				<SelectOption
					onSelectChange={handleWeaknesses}
					name="Weaknesses"
					options={types}
					placeholder="Pick a type"
				/>
				<SelectOption
					onSelectChange={handleResistances}
					name="Resistances"
					options={types}
					placeholder="Pick a type"
				/>
				<RangeValue
					onRangeChange={handleCost}
					name="Retreat Cost"
					min={0}
					max={5}
				/>
				<SelectOption
					onSelectChange={handleSets}
					name="Sets"
					options={sets}
					placeholder="Pick a set"
				/>
				<Input
					onTextChange={handleArtist}
					name="Artist"
					placeholder="Enter an Artist"
				/>
				<SelectOption
					onSelectChange={handleRarities}
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
