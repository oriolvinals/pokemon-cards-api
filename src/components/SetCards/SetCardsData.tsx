import CardPreview from "./CardPreview";

type Cards = {
	cards: Array<any>;
};

const SetCardsData = ({ cards }: Cards) => {
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
};

export default SetCardsData;
