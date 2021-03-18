import CardPreview from "./CardPreview";

type Cards = {
	cards: Array<any>;
};

const SetCardsData = ({ cards }: Cards) => {
	return (
		<div className="px-10 grid grid-cols-4">
			{cards.map((element, i) => (
				<CardPreview
					key={i}
					image={element.images.small}
					name={element.name}
				/>
			))}
		</div>
	);
};

export default SetCardsData;
