import SetPreview from "./SetPreview";

interface Sets  {
	sets: Array<any>;
};

const SetsData = ({ sets }: Sets) => {
	if (sets.length > 0) {
		return (
			<div className="px-5 grid grid-cols-1">
				{sets.map((element, i) => (
					<SetPreview
						key={i}
						id={element.id}
						name={element.name}
						releaseDate={element.releaseDate}
						logo={element.images.logo}
						symbol={element.images.symbol}
					/>
				))}
			</div>
		);
	} else {
		return <div className="text-gray-500 text-2xl text-center mt-10"> No hi ha dades disponibles</div>;
	}
};

export default SetsData;
