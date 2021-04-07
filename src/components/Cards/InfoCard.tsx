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
			<h1 className="text-center text-xl">{name}</h1>
			<img
				src={image}
				alt={name + " card"}
				className="w-96 rounded-xl shadow-2xl"
			/>
			<div className="flex mt-3 text-md justify-between">
				<p>
					{supertype} -{" "}
					<span className="text-xs">{subtypes.join(", ")}</span>
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
		</div>
	);
};

export default InfoCard;
