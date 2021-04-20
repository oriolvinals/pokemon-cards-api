import { IonIcon } from "@ionic/react";
import { planet } from "ionicons/icons";

interface Props {
	id: number;
	total: number;
}
const Pagination = ({ id, total }: Props) => {
	const handleBack = () => {
		if (id === 1) {
			console.log(total);
		} else {
			console.log(id);
		}
	};

	const handleNext = () => {
		if (id === total) {
			console.log(1);
		} else {
			console.log(id + 1);
		}
	};
	return (
		<div className="flex flex-row justify-around">
			<IonIcon
				icon={planet}
				className="h-12 w-12"
				onClick={handleBack}
			></IonIcon>
			<IonIcon
				icon={planet}
				className="h-12 w-12"
				onClick={handleNext}
			></IonIcon>
		</div>
	);
};

export default Pagination;
