interface Info {
	tcgplayer: any;
}

const PriceCard = ({ tcgplayer }: Info) => {
	const colorsPrices = [
		{ type: "low", color: "text-green-500" },
		{ type: "mid", color: "text-blue-500" },
		{ type: "high", color: "text-red-500" },
		{ type: "market", color: "text-purple-500" },
	];
	return (
		<div>
			<p className="text-2xl">Prices</p>
			<hr className="bg-white mb-2" />
			<span className="text-sm font-bold">
				<a href={tcgplayer.url}>Buy Now From TCGplayer</a>
			</span>
			<div>
				<p className="text-sm">
					Last Updated:{" "}
					{new Date(tcgplayer.updatedAt).toLocaleDateString()}
				</p>
			</div>

			<div className="space-y-5 mt-4">
				{Object.keys(tcgplayer.prices).map(
					(element: any, i: number) => (
						<div key={i}>
							<div className="grid grid-cols-2 border-collapse gap-y-1">
								{Object.keys(tcgplayer.prices[element]).map(
									(type: any, j: number) => {
										return (
											<>
												{type !== "directLow" && (
													<div key={j}>
														<p className="capitalize text-xs">
															{element
																.split(
																	/(?=[A-Z])/
																)
																.join(" ")}{" "}
															{type}
														</p>
														<p
															className={
																colorsPrices.find(
																	(color) =>
																		color.type ===
																		type
																)?.color
															}
														>
															$
															{tcgplayer.prices[
																element
															][type].toFixed(2)}
														</p>
													</div>
												)}
											</>
										);
									}
								)}
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default PriceCard;
