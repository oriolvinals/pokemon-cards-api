import { IonInput, IonItem, IonLabel } from "@ionic/react";

interface Props {
	onTextChange: any;
	name: string;
}

const Input = ({ onTextChange, name }: Props) => {
	return (
		<IonItem className="flex">
			<IonLabel className="flex-grow w-32">{name}</IonLabel>
			<IonItem className="rounded-xl flex-shrink ">
				<IonInput onIonChange={onTextChange} />
			</IonItem>
		</IonItem>
	);
};

export default Input;
