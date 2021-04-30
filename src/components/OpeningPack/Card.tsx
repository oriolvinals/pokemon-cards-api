import { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface Props {
	image: string;
}

const Card = ({ image }: Props) => {
	const [isFliped, setIsFliped] = useState(false);
	const handleClick = (e: any) => {
		if (!isFliped) setIsFliped(!isFliped);
	};
	return (
		<ReactCardFlip
			isFlipped={isFliped}
			flipDirection="horizontal"
			flipSpeedBackToFront={0.8}
		>
			<img
				onClick={handleClick}
				src="/assets/images/cardReverse.png"
				alt="backside"
				className="h-26"
			/>

			<img
				onClick={handleClick}
				src={image}
				alt="front"
				className="h-26"
			/>
		</ReactCardFlip>
	);
};

export default Card;
