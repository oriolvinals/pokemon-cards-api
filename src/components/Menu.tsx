import {
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonMenu,
	IonMenuToggle,
	IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
	archiveOutline,
	archiveSharp,
	bookmarkOutline,
	heartOutline,
	heartSharp,
	mailOutline,
	mailSharp,
	paperPlaneOutline,
	paperPlaneSharp,
	trashOutline,
	trashSharp,
	warningOutline,
	warningSharp,
} from "ionicons/icons";

interface AppPage {
	url: string;
	iosIcon: string;
	mdIcon: string;
	title: string;
}

const appPages: AppPage[] = [
	{
		title: "Search",
		url: "/search",
		iosIcon: mailOutline,
		mdIcon: mailSharp,
	},
	{
		title: "Sets",
		url: "/sets",
		iosIcon: paperPlaneOutline,
		mdIcon: paperPlaneSharp,
	},
	{
		title: "Advanced",
		url: "/advanced",
		iosIcon: heartOutline,
		mdIcon: heartSharp,
	},
];

const Menu: React.FC = () => {
	const location = useLocation();

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Menu</IonListHeader>
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									className={
										location.pathname === appPage.url
											? "selected"
											: ""
									}
									routerLink={appPage.url}
									routerDirection="none"
									lines="none"
									detail={false}
								>
									<IonIcon
										slot="start"
										ios={appPage.iosIcon}
										md={appPage.mdIcon}
									/>
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
