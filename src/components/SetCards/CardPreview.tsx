type CardProps = {
	image: string;
	name: string;
};

const CardPreview = ({ image, name }: CardProps) => {
	return <img key={name} src={image} alt={name + " card"} />;
};

export default CardPreview;
