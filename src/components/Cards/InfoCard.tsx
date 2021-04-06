interface Info {
	name: string;
	supertype: string;
	subtypes: Array<string>;
	hp: number;
	type?: Array<string>;
	image: string;
}

const InfoCard = ({ name, supertype, subtypes, hp, type, image }: Info) => {
	return (
		<div>
			<div className="flex mb-3 text-md justify-between">
				<p>
					{supertype} - {subtypes}
				</p>
				{type && (
					<div className="flex space-x-2 justify-center items-center">
						<p className="text-sm">{hp} HP</p>

						<img
							src={"/assets/images/types/" + type + ".png"}
							alt=""
							className="w-6 h-6"
						/>
					</div>
				)}
			</div>
			<img src={image} alt={name + " card"} className="w-96 rounded-xl" />
		</div>
	);
};

export default InfoCard;
