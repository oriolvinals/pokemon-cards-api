import Set from "./Set";
interface Props {
	sets: Array<{
		id: string;
		name: string;
		image: string;
		totalCards: number;
		cards: Array<{
			id: string;
			name: string;
			image: string;
		}>;
	}>;
}
const Sets = ({ sets }: Props) => {
	return (
		<div className="p-5">
			{sets.length !== 0 && sets && (
				<div>
					<div className="text-gray-500 text-4xl text-center justify-center">
						SETS
					</div>
					<div className="flex flex-col space-y-3 mt-4">
						{sets.map((set: any, i: number) => {
							return (
								<Set
									key={i}
									id={set.id}
									name={set.name}
									image={set.image}
									cards={set.cards.length}
									total={set.totalCards}
								/>
							);
						})}
					</div>
				</div>
			)}
			{sets.length === 0 && sets && (
				<div className="text-gray-500 text-2xl text-center fixed z-50 inset-1/4 flex items-center justify-center">
					{"No sets"}
				</div>
			)}
		</div>
	);
};

export default Sets;
