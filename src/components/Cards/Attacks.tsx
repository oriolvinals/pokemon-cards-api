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
					<div className="flex flex-col space-y-5">
						{attacks.map((attack, i) => {
							return <Attack attack={attack} key={i} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Attacks;
