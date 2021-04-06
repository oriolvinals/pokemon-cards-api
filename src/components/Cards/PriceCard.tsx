interface Info {
	tcgplayer: any;
}

const PriceCard = ({ tcgplayer }: Info) => {
	return (
		<div className="px-10">
			<span className="text-2xl font-bold"><a href={tcgplayer.url}>Buy Now From TCGplayer</a></span>
			<div className="py-4">
				<p className="text-lg">Last Updated: {new Date(tcgplayer.updatedAt).toLocaleDateString()}</p>
			</div>s
			<div>
				{Object.keys(tcgplayer.prices).map(
					(element: any, i: number) => (
						<div key={i}>
							<table>
							{element}
							{Object.keys(tcgplayer.prices[element]).map(
								(type: any, j: number) => (
									<div key={j}>
										<p>{type}</p>
										<p>{tcgplayer.prices[element][type]}</p>
									</div>
								)
							)}
							</table>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default PriceCard;
