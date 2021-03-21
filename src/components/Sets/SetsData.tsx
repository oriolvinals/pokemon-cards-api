import SetPreview from "./SetPreview";

interface Sets {
	sets: Array<any>;
	data: boolean;
}

const SetsData = ({ sets, data }: Sets) => {
	if (data) {
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
							legalities={element.legalities}
						/>
					))}
				</div>
			);
		} else {
			return (
				<div className="text-gray-500 text-2xl text-center fixed z-50 inset-1/4 flex items-center justify-center">
					No hi ha dades disponibles
				</div>
			);
		}
	} else {
		return <></>;
	}
};

export default SetsData;
