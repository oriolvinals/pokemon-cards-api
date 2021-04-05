import { IonIcon, IonItem, IonLabel, IonRange } from "@ionic/react";
import { removeOutline, addOutline } from "ionicons/icons";

interface Props {
	name: string;
	min: number;
	max: number;
}

const RangeValue = ({ name, min, max }: Props) => {
	return (
		<IonItem>
			<IonLabel position="floating">{name}</IonLabel>
			<IonRange dual-knobs pin snaps min={min} max={max} step={1}>
				<IonIcon
					size="big"
					slot="start"
					ios={removeOutline}
					md={removeOutline}
				/>
				<IonIcon
					size="big"
					slot="end"
					ios={addOutline}
					md={addOutline}
				/>
			</IonRange>
		</IonItem>
	);
};

export default RangeValue;
