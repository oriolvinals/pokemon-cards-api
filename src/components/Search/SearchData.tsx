import CardPreview from "../SetCards/CardPreview";

type Cards = {
	cards: Array<any>;
};

const SearchData = ({ cards }: Cards) => {
	if (cards.length > 1) {
		return (
			<div className="px-5 grid grid-cols-2">
				{cards.map((element, i) => (
					<CardPreview
						key={i}
						image={element.images.small}
						id={element.id}
						name={element.name}
					/>
				))}
			</div>
		);
	} else {
		return <div>Not found</div>;
	}
};

export default SearchData;
