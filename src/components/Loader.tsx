import { card } from "ionicons/icons";

interface Loading {
	loading: boolean;
}

const Loader = ({ loading }: Loading) => {
	const nLoading = Math.floor(Math.random() * 4 + 1);

	return (
		<>
			{loading && (
				<div className="fixed z-50 inset-1/4 flex items-center justify-center">
					<img
						src={"/assets/images/loading" + nLoading + ".svg"}
						alt="Loader icon"
						className="animate-spin -ml-1 mr-3 h-20 w-20 text-white"
					/>
				</div>
			)}
		</>
	);
};

export default Loader;
