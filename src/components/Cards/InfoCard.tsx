interface Info {
	name: string;
	supertype: string;
	subtypes: Array<string>;
	hp: number;
	type?: Array<string>;
	image: string;
	flavor: string;
	holo: boolean;
}

const InfoCard = ({
	name,
	supertype,
	subtypes,
	hp,
	type,
	image,
	flavor,
	holo,
}: Info) => {
	return (
		<div className="mt-5">
			<div className={holo ? "card " : ""}>
				<img src={image} alt={name + " card"} className="rounded-md" />
			</div>
			<div className="flex mt-3 text-md justify-between">
				<p>
					{supertype} -{" "}
					<span className="text-xs">{subtypes.join(", ")}</span>
				</p>
				{type && (
					<div className="flex space-x-2 justify-center items-center">
						<p className="text-sm">{hp} HP</p>

						<img
							src={"/assets/images/types/" + type[0] + ".png"}
							alt=""
							className="w-6 h-6"
						/>
					</div>
				)}
			</div>
			{flavor && (
				<p className="text-center mt-3 text-xs italic font-thin">
					“ {flavor} ”
				</p>
			)}
		</div>
	);
};

export default InfoCard;
