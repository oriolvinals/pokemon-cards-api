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
import { user, logOut } from "../services/Firebase";

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
		iosIcon: "/assets/icon/menu/home.svg",
		mdIcon: "/assets/icon/menu/home.svg",
	},
	{
		title: "Sets",
		url: "/sets",
		iosIcon: "/assets/icon/menu/sets.svg",
		mdIcon: "/assets/icon/menu/sets.svg",
	},
	{
		title: "Advanced",
		url: "/advanced",
		iosIcon: "/assets/icon/menu/advanced.svg",
		mdIcon: "/assets/icon/menu/advanced.svg",
	},
];

const userMenus: AppPage[] = [
	{
		title: "User",
		url: "/user",
		iosIcon: "/assets/icon/menu/user.svg",
		mdIcon: "/assets/icon/menu/user.svg",
	},
	{
		title: "Log Out",
		url: "/logout",
		iosIcon: "/assets/icon/menu/logout.svg",
		mdIcon: "/assets/icon/menu/logout.svg",
	},
];

const noUserMenus: AppPage[] = [
	{
		title: "Login",
		url: "/login",
		iosIcon: "/assets/icon/menu/login.svg",
		mdIcon: "/assets/icon/menu/login.svg",
	},
];

const Menu = () => {
	const currentUser = user();
	const location = useLocation();

	const handleLogOut = async () => {
		await logOut();
	};

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Pokemon Card App</IonListHeader>
					{currentUser !== null && (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === userMenus[0].url
										? "light"
										: ""
								}
								routerLink={userMenus[0].url}
							>
								<IonIcon
									slot="start"
									md={userMenus[0].iosIcon}
									ios={userMenus[0].mdIcon}
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{userMenus[0].title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					)}
					{appPages.map((appPage, index) => {
						return (
							<IonMenuToggle key={index} autoHide={false}>
								<IonItem
									color={
										location.pathname === appPage.url
											? "light"
											: ""
									}
									routerLink={appPage.url}
								>
									<IonIcon
										slot="start"
										md={appPage.iosIcon}
										ios={appPage.mdIcon}
										className="h-10 w-10 mr-6"
									></IonIcon>
									<IonLabel>{appPage.title}</IonLabel>
								</IonItem>
							</IonMenuToggle>
						);
					})}
					{currentUser ? (
						<IonMenuToggle autoHide={false}>
							<IonItem onClick={handleLogOut}>
								<IonIcon
									slot="start"
									md={userMenus[1].iosIcon}
									ios={userMenus[1].mdIcon}
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{userMenus[1].title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					) : (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === noUserMenus[0].url
										? "light"
										: ""
								}
								routerLink={noUserMenus[0].url}
							>
								<IonIcon
									slot="start"
									md={noUserMenus[0].iosIcon}
									ios={noUserMenus[0].mdIcon}
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{noUserMenus[0].title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					)}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
