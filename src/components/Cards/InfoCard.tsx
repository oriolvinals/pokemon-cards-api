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
		<div className="p-10">
			<div className="flex mb-2 text-xl justify-between">
				<p>{supertype} - {subtypes}</p>
				<div className="flex space-x-2 justify-center items-center">
					<p>{hp} HP</p>
					<img src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png" alt="" className="w-7 h-7"/>
				</div>
			</div>
			<img src={image} alt={name + " card"} className="w-80" />
		</div>
	);
};

export default InfoCard;
