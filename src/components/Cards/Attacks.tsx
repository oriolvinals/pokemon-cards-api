import Attack from "./Attack";

interface Props {
	attacks: Array<any>;
}
const Attacks = ({ attacks }: Props) => {
	return (
		<>
			{attacks && (
				<div>
					<p className="text-2xl">Attacks</p>
					<hr className="bg-white mb-2" />
					<div className="flex flex-col space-y-7">
						{attacks.map((attack) => {
							return <Attack attack={attack} key={attack} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Attacks;
