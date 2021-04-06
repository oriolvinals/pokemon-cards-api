interface Props {
	attack: any;
}

const Attack = ({ attack }: Props) => {
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-row justify-between text-base">
				<div className="flex flex-row space-x-2 items-center justify-start">
					{attack.cost.map((cost: string) => {
						return (
							<img
								className="h-6"
								src={"/assets/images/types/" + cost + ".png"}
								alt={cost + " cost"}
							/>
						);
					})}
					<p>{attack.name}</p>
				</div>
				{attack.damage && <p>{attack.damage}</p>}
			</div>
			<p className="text-sm">{attack.text}</p>
		</div>
	);
};

export default Attack;
