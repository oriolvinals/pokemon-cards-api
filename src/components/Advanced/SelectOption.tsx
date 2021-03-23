import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React from "react";

interface Props {
	name: string;
	options: Array<any>;
}
const SelectOption = ({ name, options }: Props) => {
	return (
		<IonItem>
			<IonLabel>{name}</IonLabel>
			<IonSelect>
				{options.map((element, i) => (
					<IonSelectOption key={i}>{element}</IonSelectOption>
				))}
			</IonSelect>
		</IonItem>
	);
};

export default SelectOption;
