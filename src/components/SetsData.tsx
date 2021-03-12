import React, { useState, useEffect } from "react";
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
		<div>
			{sets.map((element, i) => (
				<p key={i}>{element.id}</p>
			))}
		</div>
	);
};

export default SetsData;
