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
				<div className="px-5 my-2 grid gap-3 grid-cols-2 bg-transparent">
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
