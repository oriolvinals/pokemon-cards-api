interface Info {
	name: string;
	supertype: string;
	subtypes: Array<string>;
	hp: number;
	type: Array<string>;
	image: string;
	loading: boolean;
}

const InfoCard = ({
	name,
	supertype,
	subtypes,
	hp,
	type,
	image,
	loading,
}: Info) => {
	if (!loading) return <></>;
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
