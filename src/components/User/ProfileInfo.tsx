interface Props {
	username: string;
	email: string;
	sets: number;
	holoCards: number;
	cards: number;
	image: string;
}

const ProfileInfo = ({
	username,
	email,
	image,
	sets,
	holoCards,
	cards,
}: Props) => {
	return (
		
		<div className="shadow-lg  w-full">
			<div className="flex flex-row items-start space-x-4 bg_user p-4">
				<img
					src={"/assets/icon/user/" + image + ".svg"}
					className="w-28 h-28"
					alt={image + " avatar"}
				/>
				<div className="h-28 w-full flex flex-col justify-between">
					<div>
						<p className="text-white dark:text-white text-xl font-medium">
							{username}
						</p>
						<p className="text-white text-xs">{email}</p>
					</div>
					<div className="rounded-lg bg-green-400  dark:bg-white p-2 w-full">
						<div className="flex items-center justify-around text-xs text-green-900 dark:text-black">
							<p className="flex flex-col">
								Sets
								<span className="text-black text-center font-bold">
									{sets}
								</span>
							</p>
							<p className="flex flex-col">
								Holo Cards
								<span className="text-black  font-bold text-center">
									{holoCards}
								</span>
							</p>
							<p className="flex flex-col">
								Cards
								<span className="text-black font-bold text-center">
									{cards}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
