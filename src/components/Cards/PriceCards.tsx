interface Info {
	data: any;
	loading: boolean;
}

const PriceCards = ({ data, loading }: Info) => {
	if (loading) {
		return (
			<div className="py-6 px-10">
				<span className="text-2xl">{data.tcgplayer.url}</span>
			</div>
		);
	} else {
		return <div>no data</div>;
	}
};

export default PriceCards;
