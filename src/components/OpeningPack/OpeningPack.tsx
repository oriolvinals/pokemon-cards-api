import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

interface Props {
	reloading: boolean;
	set: any;
	cards: any;
}

const OpeningPack = ({ reloading, set, cards }: Props) => {
	const [numberCards, setNumberCards] = useState(0);
	const [name, setName] = useState("");
	const [cardsOpening, setCardsOpening] = useState<Array<any>>([]);
	/* 5 common Pokémon cards, 3 uncommon cards, 1 reverse holographic card of any rarity, and 1 rare card or rarer.
	 */

	const pickCards = useCallback(() => {
		if (numberCards === 1) {
			const randomElement =
				cards[Math.floor(Math.random() * cards.length)];
			setCardsOpening([randomElement]);
		} else {
			let c = [];
			for (let index = 0; index < numberCards; index++) {
				const randomElement =
					cards[Math.floor(Math.random() * cards.length)];
				c.push(randomElement);
			}
			setCardsOpening(c);
		}
	}, [numberCards, cards]);

	const calculateCards = useCallback(() => {
		if (name) {
			const nametl = name.toLowerCase();
			if (
				nametl.includes("mcdonald's collection") ||
				nametl.includes("black star promos")
			)
				setNumberCards(1);
			else if (nametl.includes("pop series")) setNumberCards(2);
			else setNumberCards(10);
			pickCards();
		}
	}, [name, pickCards]);

	useEffect(() => {
		setName(set?.name);
		calculateCards();
	}, [set?.name, calculateCards]);

	useEffect(() => {
		if (reloading) {
			console.log("sha de reloading");
			pickCards();
		}
	}, [reloading, pickCards]);

	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-col items-center mt-4">
				<Link to={"/sets/" + set?.id}>
					<img
						src={set?.images?.logo}
						alt={"logo"}
						className="h-24"
					/>
				</Link>
			</div>
			<div className="grid grid-cols-2 gap-3 p-3">
				{!reloading &&
					cardsOpening.map((card, i) => (
						<Card key={i} image={card?.images?.small} />
					))}
			</div>
		</div>
	);
};
export default OpeningPack;
