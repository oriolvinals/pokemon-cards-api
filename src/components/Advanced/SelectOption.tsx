import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

interface Props {
	onSelectChange?: any;
	name: string;
	options: Array<any>;
	placeholder: string;
}
const SelectOption = ({
	onSelectChange,
	name,
	options,
	placeholder,
}: Props) => {
	return (
		<IonItem color="dark">
			<IonLabel>{name}</IonLabel>
			<IonSelect
				color="dark"
				placeholder={placeholder}
				multiple
				onIonChange={onSelectChange}
			>
				{options.map((element, i) => (
					<IonSelectOption key={i}>{element}</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectOption;
