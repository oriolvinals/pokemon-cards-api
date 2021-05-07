interface Props {
	legalities: any;
}
const Legalities = ({ legalities }: Props) => {
	const leg = ["standard", "expanded", "unlimited"];
	const colors = [
		{ name: "empty", bg: "bg-white", text: "text-black" },
		{ name: "Legal", bg: "bg-green-500", text: "text-black" },
		{ name: "Banned", bg: "bg-red-400", text: "text-white" },
	];
	return (
		<>
			{legalities && (
				<div>
					<p className="text-2xl">Legalities</p>
					<hr className="bg-white mb-2" />
					<div className="flex flex-col space-y-7">
						<div className="grid grid-cols-1 text-center text-xs px-12 gap-y-2">
							{leg.map((l) => {
								return (
									<div
										key={l}
										className="grid grid-cols-2 text-center text-xs"
									>
										<p className="bg-gray-700 py-1 rounded-l-lg capitalize">
											{l}
										</p>
										{legalities[l] && (
											<p
												className={
													colors.find(
														(bg) =>
															bg.name ===
															legalities[l]
													)?.bg +
													" py-1 rounded-r-lg " +
													colors.find(
														(text) =>
															text.name ===
															legalities[l]
													)?.text
												}
											>
												{legalities[l]}
											</p>
										)}
										{!legalities[l] && (
											<p className="bg-gray-200 text-black py-1 rounded-r-lg">
												Not Legal
											</p>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Legalities;
