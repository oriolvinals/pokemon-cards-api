import { card } from "ionicons/icons";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

interface Props {
	reloading: boolean;
}

const OpeningPack = ({ reloading }: Props) => {
	const [numberCards, setNumberCards] = useState(1);
	const [name, setName] = useState("");
	const [cards, setCards] = useState([1]);
	/* 5 common Pokémon cards, 3 uncommon cards, 1 reverse holographic card of any rarity, and 1 rare card or rarer.
	 */

	useEffect(() => {
		setName("hola");
		calculateCards(name);
	}, [name]);

	const pickCards = useCallback(() => {
		setCards([1]);
		console.log("pick " + numberCards);
	}, [numberCards]);

	useEffect(() => {
		if (reloading) {
			console.log("sha de reloading");
			pickCards();
		}
	}, [reloading, pickCards]);

	const calculateCards = (name: string) => {
		const nametl = name.toLowerCase();
		if (
			nametl.includes("mcdonald's collection") ||
			nametl.includes("black star promos")
		)
			setNumberCards(1);
		else if (nametl.includes("pop series")) setNumberCards(2);
		else setNumberCards(10);
	};

	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-col items-center mt-4">
				<Link to={"/sets/" + "a"}>
					<img src={""} alt={"logo"} />
				</Link>
			</div>
			<div className="grid grid-cols-2 gap-3 p-3">
				{!reloading &&
					cards.map((card, i) => (
						<Card
							key={i}
							image="https://images.pokemontcg.io/swsh5/1_hires.png"
						/>
					))}
			</div>
		</div>
	);
};
export default OpeningPack;
