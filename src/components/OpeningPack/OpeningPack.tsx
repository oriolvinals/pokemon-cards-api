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
		} else if (numberCards === 2) {
			const randomElements = [
				cards[Math.floor(Math.random() * cards.length)],
				cards[Math.floor(Math.random() * cards.length)],
			];
			setCardsOpening(randomElements);
		} else {
			let c: Array<any> = [];
			let common = cards.filter((card: any) => {
				return (
					["Common", "Uncommon", "Rare"].includes(card.rarity) &&
					card.supertype === "Pokémon"
				);
			});
			let holo = cards.filter((card: any) => {
				return (
					!["Common", "Uncommon", "Rare"].includes(card.rarity) &&
					card.supertype === "Pokémon"
				);
			});
			let trainer = cards.filter((card: any) => {
				return (
					card.supertype === "Trainer" || card.supertype === "Energy"
				);
			});

			common.sort(() => Math.random() - 0.5);
			const commonpick = common.slice(0, 5);
			holo.sort(() => Math.random() - 0.5);
			const holopick = holo.slice(0, 3);
			trainer.sort(() => Math.random() - 0.5);
			const trainerpick = trainer.slice(0, 2);
			c = [...c, ...commonpick, ...holopick, ...trainerpick];

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
						<Card
							key={card?.id || i}
							image={card?.images?.small}
							flipped={false}
						/>
					))}
			</div>
		</div>
	);
};
export default OpeningPack;
