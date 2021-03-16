const getSets = async () => {
	const response = await fetch("https://api.pokemontcg.io/v2/sets", {
		headers: {
			"X-Api-Key": "f450f539-8184-4865-ae77-11d7141e1989",
		},
	});
	return await response.json();
};

const getSet = async (id: string) => {
	const response = await fetch("https://api.pokemontcg.io/v2/sets/" + id, {
		headers: {
			"X-Api-Key": "f450f539-8184-4865-ae77-11d7141e1989",
		},
	});
	return await response.json();
};

const getCardsFromSet = async (id: string) => {
	const response = await fetch(
		"https://api.pokemontcg.io/v2/cards?q=set.id:" + id,
		{
			headers: {
				"X-Api-Key": "f450f539-8184-4865-ae77-11d7141e1989",
			},
		}
	);
	return await response.json();
};

export { getSets, getSet, getCardsFromSet };
