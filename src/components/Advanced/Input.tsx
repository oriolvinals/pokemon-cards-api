import { IonInput, IonItem, IonLabel } from "@ionic/react";

interface Props {
	onTextChange: any;
	name: string;
	placeholder: string;
}

const Input = ({ onTextChange, name, placeholder }: Props) => {
	return (
		<IonItem className="flex" color="dark">
			<IonLabel position="fixed">{name}</IonLabel>
			<IonItem className="rounded-xl flex-shrink" color="dark">
				<IonInput
					onIonChange={onTextChange}
					placeholder={placeholder}
				/>
			</IonItem>
		</IonItem>
	);
};

export default Input;
