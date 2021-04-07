interface Props {
	weaknesses: Array<any>;
	resistances: Array<any>;
	retreatCost: Array<string>;
	artist: string;
	rarity: string;
	number: number;
	totalNumber: number;
}

const AdditionalInfo = ({
	weaknesses,
	resistances,
	retreatCost,
	artist,
	rarity,
	number,
	totalNumber,
}: Props) => {
	return (
		<div>
			<p className="text-2xl">Additional info</p>
			<hr className="bg-white mb-2" />
			<div className="grid grid-cols-2 gap-y-4">
				{weaknesses && (
					<div>
						<p>Weakness</p>
						{weaknesses.map((weak: any, i: number) => {
							return (
								<div
									className="flex flex-row space-x-2"
									key={weak}
								>
									<img
										className="h-6"
										src={
											"/assets/images/types/" +
											weak.type +
											".png"
										}
										alt={weak.type + " weakness type"}
									/>
									<span>{weak.value}</span>
								</div>
							);
						})}
					</div>
				)}
				{resistances && (
					<div>
						<p>Resistances</p>
						{resistances.map((res: any, i: number) => {
							return (
								<div
									className="flex flex-row space-x-2"
									key={res}
								>
									<img
										className="h-6"
										src={
											"/assets/images/types/" +
											res.type +
											".png"
										}
										alt={res.type + " weakness type"}
									/>
									<span>{res.value}</span>
								</div>
							);
						})}
					</div>
				)}
				{retreatCost && (
					<div>
						<p>Retreat Cost</p>
						<div className="flex flex-row space-x-2">
							{retreatCost.map((retreat: any, i: number) => {
								return (
									<img
										className="h-6"
										key={i}
										src={
											"/assets/images/types/" +
											retreat +
											".png"
										}
										alt={
											"Retreat cost " + retreat + " icon"
										}
									/>
								);
							})}
						</div>
					</div>
				)}
				{artist && (
					<div>
						<p>Artist</p>
						<p className="text-sm">{artist}</p>
					</div>
				)}
				{rarity && (
					<div>
						<p>Rarity</p>
						<p className="text-sm">{rarity}</p>
					</div>
				)}
				{number && (
					<div>
						<p>Number</p>
						<p className="text-sm">
							{number} / {totalNumber}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdditionalInfo;
