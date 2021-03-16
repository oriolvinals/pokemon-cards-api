import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSets } from "../services/Api";

const SetsData: React.FC = () => {
	const [sets, setSets] = useState<any[]>([]);

	useEffect(() => {
		const getSetsFromApi = async () => {
			const data = await getSets();
			setSets(data.data);
		};
		getSetsFromApi();
	}, []);

	return (
		<div className="my-20 px-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
			{sets.map((element, i) => (
				<Link
					to={{ pathname: "/sets/" + element.id }}
					key={i}
					className="bg-gray-800 p-10 m-2 flex flex-col items-center rounded-md scale-100 transition hover:absolute hover:scale-200"
				>
					<div className="text-center h-36 pt-3 flex items-center justify-center">
						<img
							src={element.images.logo}
							alt={element.name + " set logo"}
							className="max-w-full max-h-full"
						/>
					</div>
					<div className="flex mt-5 items-center justify-center">
						<div className="text-center h-8 flex items-center justify-center">
							<img
								src={element.images.symbol}
								alt={element.name + " set symbol"}
								className="max-w-full max-h-full"
							/>
						</div>
						<div className="pl-4 text-gray-400">
							<p className="bold text-xl">{element.name}</p>
							<p>{element.releaseDate}</p>
						</div>
					</div>
					<div></div>
				</Link>
			))}
		</div>
	);
};

export default SetsData;
