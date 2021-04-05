import { IonInput, IonItem, IonLabel } from "@ionic/react";

interface Props {
	onTextChange: any;
	name: string;
	placeholder: string;
}

const Input = ({ onTextChange, name, placeholder }: Props) => {
	return (
		<IonItem className="flex">
			<IonLabel position="fixed">{name}</IonLabel>
			<IonItem className="rounded-xl flex-shrink ">
				<IonInput
					onIonChange={onTextChange}
					placeholder={placeholder}
				/>
			</IonItem>
		</IonItem>
	);
};

export default Input;
