import { Link } from "react-router-dom";

interface Props {
	id: string;
	name: string;
	image: string;
	total: number;
}

const Set = ({ id, name, image, total }: Props) => {
	return (
		<Link
			to={{ pathname: "/opening/" + id }}
			className="rounded-md border-transparent"
			style={{
				backgroundImage: `url(` + image + `)`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="flex flex-row justify-between items-center p-5 w-full h-full bg-black bg-opacity-60 rounded-md">
				<div className="flex flex-row items-center space-x-5">
					<span className="font-bold text-xl">{name}</span>
				</div>
				<div className="text-md">{total}</div>
			</div>
		</Link>
	);
};

export default Set;
