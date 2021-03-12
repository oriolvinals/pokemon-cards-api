const getSets = async () => {
	const response = await fetch("https://api.pokemontcg.io/v2/sets");
	return await response.json();
};

const getSet = async (id: string) => {
	const response = await fetch("https://api.pokemontcg.io/v2/sets/" + id);
	return await response.json();
};

export { getSets, getSet };
