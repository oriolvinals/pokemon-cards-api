const api_key = "f450f539-8184-4865-ae77-11d7141e1989";
const getSets = async () => {
	const response = await fetch("https://api.pokemontcg.io/v2/sets", {
		headers: {
			"X-Api-Key": api_key,
		},
	});
	return await response.json();
};

const getSet = async (id: string) => {
	const response = await fetch("https://api.pokemontcg.io/v2/sets/" + id, {
		headers: {
			"X-Api-Key": api_key,
		},
	});
	return await response.json();
};

const getCardsFromSet = async (id: string) => {
	const response = await fetch(
		"https://api.pokemontcg.io/v2/cards?q=set.id:" + id,
		{
			headers: {
				"X-Api-Key": api_key,
			},
		}
	);
	return await response.json();
};

const getCard = async (id: string) => {
	const response = await fetch("https://api.pokemontcg.io/v2/cards/" + id, {
		headers: {
			"X-Api-Key": api_key,
		},
	});
	return await response.json();
};

const getSearch = async (query: string) => {
	const response = await fetch(
		"https://api.pokemontcg.io/v2/cards?q=" + query,
		{
			headers: {
				"X-Api-Key": api_key,
			},
		}
	);
	return await response.json();
};

export { getSets, getSet, getCardsFromSet, getCard, getSearch };
