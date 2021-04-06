import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import { planet, albums, apps, people } from "ionicons/icons";

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: "Home",
		url: "/",
		iosIcon: planet,
		mdIcon: planet,
	},
	{
		title: "Sets",
		url: "/sets",
		iosIcon: albums,
		mdIcon: albums,
	},
	{
		title: "Advanced",
		url: "/advanced",
		iosIcon: apps,
		mdIcon: apps,
	},
	{
		title: "Login",
		url: "/login",
		iosIcon: people,
		mdIcon: people,
	},
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Pokemon Card App</IonListHeader>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className="bg-green-600"
									routerLink={appPage.url}
								>
									<IonIcon
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									></IonIcon>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
