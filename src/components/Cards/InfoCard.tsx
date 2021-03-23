interface Info {
	name: string;
	supertype: string;
	subtypes: Array<string>;
	hp: number;
	type: Array<string>;
	loading: boolean;
}

const InfoCard = ({name, supertype, subtypes, hp, type, loading}: Info) => {
	return <div>{supertype} {subtypes}</div>
}

export default InfoCard;