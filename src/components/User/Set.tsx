import { url } from "node:inspector";

interface Props {
	name: string;
	image: string;
	cards: number;
	total: number;
}

const Set = ({ name, image, cards, total }: Props) => {
	return (
		<div className="flex flex-row justify-between items-center p-3 border rounded-md border-transparent bg-blue-700 bg-opacity-10">
			<div className="flex flex-row items-center space-x-5">
				<img src={image} alt="Set symbol" className="h-12" />
				<span className="text-xl">{name}</span>
			</div>
			<div className="text-xl">
				{cards} / {total}
			</div>
		</div>
	);
};

export default Set;
