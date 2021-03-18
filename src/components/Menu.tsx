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

import { Link, useLocation } from "react-router-dom";
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
		title: "Home",
		url: "/",
		iosIcon: mailOutline,
		mdIcon: mailSharp,
	},
	{
		title: "Sets",
		url: "/sets",
		iosIcon: paperPlaneOutline,
		mdIcon: paperPlaneSharp,
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
								<IonItem>
									<Link to={appPage.url}>
										{appPage.title}
									</Link>
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
