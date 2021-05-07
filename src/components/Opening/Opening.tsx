import Set from "./Set";

interface Props {
	sets: Array<any>;
	data: boolean;
}

const Opening = ({ sets, data }: Props) => {
	return (
		<>
			<div className="grid grid-cols-1 gap-3 mt-4 px-3 text-white">
				{data &&
					sets.map((set) => {
						return (
							<Set
								key={set.id}
								id={set.id}
								name={set.name}
								image={set.images.logo}
								total={set.printedTotal}
							/>
						);
					})}
			</div>
		</>
	);
};

export default Opening;
