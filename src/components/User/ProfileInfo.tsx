import { useUser } from "reactfire";
const ProfileInfo = () => {
	const currentUser = useUser();
	
	return <div className="shadow-lg  w-full p-4 bg-white ">
		<div className="flex flex-row items-start space-x-4">
			<img src="/assets/icon/user/pikachu.svg" className="w-28 h-28 rounded-full bg-green-600 " alt="user profile avatar"/>
			<div className="h-28 w-full flex flex-col justify-between">
				<div>
					<p className="text-gray-800 dark:text-white text-xl font-medium">
						Oriol Viñals
					</p>
					<p className="text-gray-400 text-xs">{currentUser.data.email}</p>
				</div>
				<div className="rounded-lg bg-green-400  dark:bg-white p-2 w-full">
					<div className="flex items-center justify-around text-xs text-green-900 dark:text-black">
						<p className="flex flex-col">
							Sets
							<span className="text-black text-center font-bold">
								34
							</span>
						</p>
						<p className="flex flex-col">
							Holo Cards
							<span className="text-black  font-bold text-center">
								30
							</span>
						</p>
						<p className="flex flex-col">
							Cards
							<span className="text-black font-bold text-center">
								455
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default ProfileInfo;
