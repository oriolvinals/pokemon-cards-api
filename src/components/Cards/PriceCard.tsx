interface Info {
	tcgplayer: any;
	loading: boolean;
}

const PriceCard = ({ tcgplayer, loading }: Info) => {
	if (loading) {
		return (
			<div className="py-6 px-10">
				<span className="text-2xl">{tcgplayer.url}</span>
				<div>
					<p className="text-2xl">{tcgplayer.updatedAt}</p>
				</div>
				<div>
					{Object.keys(tcgplayer.prices).map(
						(element: any, i: number) => (
							<div key={i}>
								{element}
								{Object.keys(tcgplayer.prices[element]).map(
									(type: any, j: number) => (
										<div key={j}>
											<p>{type}</p>
											<p>
												{
													tcgplayer.prices[element][
														type
													]
												}
											</p>
										</div>
									)
								)}
							</div>
						)
					)}
				</div>
			</div>
		);
	} else {
		return <div>no data</div>;
	}
};

export default PriceCard;
