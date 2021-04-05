import { IonIcon, IonItem, IonLabel, IonRange } from "@ionic/react";
import { removeOutline, addOutline } from "ionicons/icons";
import { useState } from "react";

interface Props {
	onRangeChange?: any;
	name: string;
	min: number;
	max: number;
}

const RangeValue = ({ onRangeChange, name, min, max }: Props) => {
	const [rangeValue, setRangeValue] = useState<{
		lower: number;
		upper: number;
	}>({ lower: min, upper: max });

	return (
		<IonItem>
			<IonLabel position="floating">{name}</IonLabel>
			<IonRange
				color="dark"
				dual-knobs
				pin
				snaps
				min={min}
				max={max}
				value={rangeValue}
				step={1}
				onIonChange={(e) => {
					setRangeValue(e.detail.value as any);
					onRangeChange(e);
				}}
			>
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
