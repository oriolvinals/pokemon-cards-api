import Rule from "./Rule";

interface Props {
	rules: Array<any>;
}
const Rules = ({ rules }: Props) => {
	return (
		<>
			{rules && (
				<div>
					<p className="text-2xl">Rules</p>
					<hr className="bg-white mb-2" />
					<div className="flex flex-col space-y-4">
						{rules.map((rule) => {
							return <Rule rule={rule} key={rule} />;
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default Rules;
