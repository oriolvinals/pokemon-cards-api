import SetPreview from "./SetPreview";
import Error from "../Error";

interface Sets {
	sets: Array<any>;
	data: boolean;
}

const SetsData = ({ sets, data }: Sets) => {
	if (data) {
		if (sets.length > 0) {
			return (
				<div className="px-2 grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
					{sets.map((element, i) => (
						<SetPreview
							key={i}
							id={element.id}
							name={element.name}
							releaseDate={element.releaseDate}
							logo={element.images.logo}
							symbol={element.images.symbol}
							legalities={element.legalities}
						/>
					))}
				</div>
			);
		} else {
			return <Error msg="No data available" />;
		}
	} else {
		return <></>;
	}
};

export default SetsData;
