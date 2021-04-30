import {
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react";
import { reloadOutline } from "ionicons/icons";
import { useState } from "react";
import OpeningPack from "../components/OpeningPack/OpeningPack";
const OpeningPackPage = () => {
	const [reloading, setReloading] = useState(false);
	const handleReload = async () => {
		setReloading(true);
		await delay(1000);
		setReloading(false);
	};
	const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<div className="flex flex-row justify-between mr-4 items-center">
						<IonTitle>{"Opening pack"}</IonTitle>
						<IonIcon
							onClick={handleReload}
							size="large"
							md={reloadOutline}
							ios={reloadOutline}
							className={reloading ? "animate-spin" : ""}
						/>
					</div>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{"Opening pack"}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<OpeningPack reloading={reloading} />
			</IonContent>
		</IonPage>
	);
};

export default OpeningPackPage;
