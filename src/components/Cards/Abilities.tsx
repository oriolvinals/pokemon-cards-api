import Ability from "./Ability";

interface Props {
	abilities: Array<any>;
}

const Abilities = ({ abilities }: Props) => {
	return (
		<>
			{abilities && (
				<div>
					<p className="text-2xl">Abilities</p>
					<hr className="bg-white mb-2" />
					<div className="flex flex-col space-y-7">
						{abilities.map((ability) => {
							return <Ability ability={ability} key={ability} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Abilities;
