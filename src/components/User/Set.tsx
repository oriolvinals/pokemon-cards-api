interface Props {
	name: string;
	image: string;
	cards: number;
	total: number;
}

const Set = ({ name, image, cards, total }: Props) => {
	return (
		<div>
			{name}
			{image}
			{cards}
			{total}
		</div>
	);
};

export default Set;
