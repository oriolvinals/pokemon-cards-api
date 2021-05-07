import { Link } from "react-router-dom";

interface Props {
	id: string;
	name: string;
	image: string;
	cards: number;
	total: number;
}

const Set = ({ id, name, image, cards, total }: Props) => {
	return (
		<Link
			to={{ pathname: "/sets/" + id }}
			className="rounded-md border-transparent"
			style={{
				backgroundImage: `url(` + image + `)`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="flex flex-row justify-between items-center p-5 w-full h-full bg-black bg-opacity-75 rounded-md">
				<div className="flex flex-row items-center space-x-5 text-md">
					<span>{name}</span>
				</div>
				<div>
					{cards} / {total}
				</div>
			</div>
		</Link>
	);
};

export default Set;
