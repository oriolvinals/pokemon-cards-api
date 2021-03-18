import SetPreview from "./SetPreview";

type Sets = {
	sets: Array<any>;
};

const SetsData = ({ sets }: Sets) => {
	return (
		<div className="px-10 grid grid-cols-1">
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
