import { Link } from "react-router-dom";

type SetProps = {
	id: string;
	name: string;
	releaseDate: string;
	logo: string;
	symbol: string;
};

const SetPreview = ({ id, name, releaseDate, logo, symbol }: SetProps) => {
	return (
		<Link
			to={{ pathname: "/set/" + id }}
			key={id}
			className="bg-gray-800 p-10 m-2 flex flex-col items-center rounded-md scale-100 transition hover:absolute hover:scale-200"
		>
			<div className="text-center h-36 pt-3 flex items-center justify-center">
				<img
					src={logo}
					alt={name + " set logo"}
					className="max-w-full max-h-full"
				/>
			</div>
			<div className="flex mt-5 items-center justify-center">
				<div className="text-center h-8 flex items-center justify-center">
					<img
						src={symbol}
						alt={name + " set symbol"}
						className="max-w-full max-h-full"
					/>
				</div>
				<div className="pl-4 text-gray-400">
					<p className="font-bold	text-2xl">{name}</p>
					<p className="text-md">{releaseDate}</p>
				</div>
			</div>
			<div></div>
		</Link>
	);
};

export default SetPreview;
