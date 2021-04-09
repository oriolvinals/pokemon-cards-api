import React from "react";
import { Link } from "react-router-dom";

type CardProps = {
	image: string;
	id: string;
	name: string;
};

const CardPreview = ({ image, id, name }: CardProps) => {
	return (
		<Link to={{ pathname: "/cards/" + id }}>
			<img
				key={name}
				src={image}
				alt={name + " card"}
				className="transition transform duration-500 hover:scale-105 rounded-md"
			/>
		</Link>
	);
};

export default CardPreview;
