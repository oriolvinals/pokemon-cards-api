type CardProps = {
	image: string;
	name: string;
};

const CardPreview = ({ image, name }: CardProps) => {
	return (
		<img
			key={name}
			src={image}
			alt={name + " card"}
			className="p-2 transition transform duration-500 hover:scale-105"
		/>
	);
};

export default CardPreview;
