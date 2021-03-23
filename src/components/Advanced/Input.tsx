import { IonInput, IonItem, IonLabel } from "@ionic/react";

interface Props {
	name: string;
}

const Input = ({ name }: Props) => {
	return (
		<IonItem className="flex">
			<IonLabel className="flex-grow w-32">{name}</IonLabel>
			<IonItem className="rounded-xl flex-shrink ">
				<IonInput value="" />
			</IonItem>
		</IonItem>
	);
};

export default Input;
