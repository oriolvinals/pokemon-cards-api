import { IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

interface Props {
	id: string;
	total: number;
}
const Pagination = ({ id, total }: Props) => {
	const [ext, setExt] = useState<string>("");
	const [idCard, setIdCard] = useState<number>(0);
	const history = useHistory();

	useEffect(() => {
		const getId = () => {
			const idString = id.split("-");
			setExt(idString[0]);
			setIdCard(parseInt(idString[1]));
		};

		getId();
	}, [id]);

	const handleBack = () => {
		if (idCard === 1) {
			history.push({ pathname: "/cards/" + ext + "-" + total });
		} else {
			history.push({
				pathname: "/cards/" + ext + "-" + (idCard - 1),
			});
		}
	};

	const handleNext = () => {
		if (idCard === total) {
			history.push({
				pathname: "/cards/" + ext + "-" + 1,
			});
		} else {
			history.push({
				pathname: "/cards/" + ext + "-" + (idCard + 1),
			});
		}
	};
	return (
		<div>
			{!isNaN(idCard) && (
				<div className="flex flex-row justify-around">
					<IonIcon
						icon={arrowBack}
						className="h-12 w-12"
						onClick={handleBack}
					></IonIcon>
					<IonIcon
						icon={arrowForward}
						className="h-12 w-12"
						onClick={handleNext}
					></IonIcon>
				</div>
			)}
		</div>
	);
};

export default Pagination;
