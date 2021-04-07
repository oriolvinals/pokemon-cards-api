import CardPreview from "./CardPreview";
import Error from "../Error";

type Cards = {
	cards: Array<any>;
	loading: boolean;
};

const SetCardsData = ({ cards, loading }: Cards) => {
	return (
		<>
			{loading && cards.length > 0 && (
				<div className="px-5 grid grid-cols-2 bg-transparent">
					{cards.map((element, i) => (
						<CardPreview
							key={i}
							image={element.images.small}
							id={element.id}
							name={element.name}
						/>
					))}
				</div>
			)}{" "}
			{loading && cards.length === 0 && <Error msg="No cards" />}
		</>
	);
};

export default SetCardsData;
