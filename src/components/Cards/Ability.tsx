interface Props {
	ability: any;
}

const Ability = ({ ability }: Props) => {
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-row justify-between text-base">
				<div className="flex flex-row space-x-2 items-center justify-start">
					<img
						className="h-6"
						key={ability}
						src={"/assets/images/types/" + ability.type + ".png"}
						alt={"Ability icon"}
					/>

					<p className="align-middle">{ability.name}</p>
				</div>
			</div>
			<p className="text-sm">{ability.text}</p>
		</div>
	);
};

export default Ability;
