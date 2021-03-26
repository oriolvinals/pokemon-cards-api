interface Info {
	name: string;
	supertype: string;
	subtypes: Array<string>;
	hp: number;
	type: Array<string>;
	image: string;
}

const InfoCard = ({ name, supertype, subtypes, hp, type, image }: Info) => {
	return (
		<div>
			{supertype}
			{subtypes}
			{hp}
			<img src={image} alt={name + " card"} />
		</div>
	);
};

export default InfoCard;
