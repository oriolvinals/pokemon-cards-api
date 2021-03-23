import CardPreview from "../SetCards/CardPreview";
import Error from "../Error";

type Cards = {
	cards: Array<any>;
	data: boolean;
};

const SearchData = ({ cards, data }: Cards) => {
	if (data) {
		if (cards.length > 0) {
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
			return <Error msg="No data found" />;
		}
	} else {
		return <></>;
	}
};

export default SearchData;
