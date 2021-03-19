import { Link } from "react-router-dom";

type SetProps = {
	id: string;
	name: string;
	releaseDate: string;
	logo: string;
	symbol: string;
	legalities: any;
};

const SetPreview = ({
	id,
	name,
	releaseDate,
	logo,
	symbol,
	legalities,
}: SetProps) => {
	return (
		<Link
			to={{ pathname: "/sets/" + id }}
			key={id}
			className="bg-gray-800 px-10 py-2 m-2 flex flex-col items-center rounded-md scale-100 hover:absolute hover:scale-200 transition-all duration-500 ease-in-out"
		>
			<div className="text-center h-24 pt-3 flex items-center justify-center">
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
