import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header: React.FC = () => {
	return (
		<IonHeader>
			<IonToolbar color="primary">
				<IonTitle>Pokémon</IonTitle>
			</IonToolbar>
		</IonHeader>
	);
};

export default Header;
