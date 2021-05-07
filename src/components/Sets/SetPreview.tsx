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
			className="bg-gray-800 px-10 py-3 flex flex-col space-y-3 items-center rounded-md scale-100 hover:absolute hover:scale-200 transition-all duration-500 ease-in-out"
		>
			<div className="text-center h-24 flex items-center justify-center">
				<img
					src={logo}
					alt={name + " set logo"}
					className="max-w-full max-h-full"
				/>
			</div>
			<div className="flex items-center justify-center">
				<div className="text-center h-8 flex items-center justify-center">
					<img
						src={symbol}
						alt={name + " set symbol"}
						className="max-w-full max-h-full"
					/>
				</div>
				<div className="pl-4 text-gray-400">
					<p className="font-bold	text-xl">{name}</p>
					<p className="text-sm text-gray-500">
						Released {new Date(releaseDate).toLocaleDateString()}
					</p>
				</div>
			</div>
			<div>
				<div className="flex flex-row space-x-3">
					{Object.keys(legalities).map((element: any, i: number) => (
						<div
							className="capitalize text-gray-400 text-sm bg-gray-700 rounded-md p-1"
							key={i}
						>
							{element}
						</div>
					))}
				</div>
			</div>
		</Link>
	);
};

export default SetPreview;
