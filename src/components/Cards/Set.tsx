import { Link } from "react-router-dom";

interface Props {
	set: any;
}
const Set = ({ set }: Props) => {
	return (
		<div>
			<p className="text-2xl">Set - {set.name}</p>
			<hr className="bg-white mb-2" />
			<div className="flex flex-col items-center">
				<Link to={"/sets/" + set.id}>
					<img
						className="h-24"
						src={set.images.logo}
						alt={set.name + " logo"}
					/>
				</Link>
			</div>
		</div>
	);
};

export default Set;
