import { useState, useEffect } from "react";
import { getSets } from "../services/Api";
import SetPreview from "./SetPreview";

type SetsProps = {
	name: string;
};

const SetsData = ({ name }: SetsProps) => {
	const [sets, setSets] = useState<any[]>([]);

	useEffect(() => {
		const getSetsFromApi = async () => {
			const data = await getSets();
			setSets(data.data);
		};
		getSetsFromApi();
	}, []);

	return (
		<div className="px-10 md:px-16 xl:px-48 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
			{sets.map((element, i) => (
				<SetPreview
					id={element.id}
					name={element.name}
					releaseDate={element.releaseDate}
					logo={element.images.logo}
					symbol={element.images.symbol}
				/>
			))}
		</div>
	);
};

export default SetsData;
