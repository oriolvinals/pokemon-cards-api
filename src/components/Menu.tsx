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
import { useFirebaseApp, useUser } from "reactfire";

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

const loginMenu = {
	title: "Login",
	url: "/login",
	iosIcon: "/assets/icon/menu/login.svg",
	mdIcon: "/assets/icon/menu/login.svg",
};

const Menu = () => {
	const firebase = useFirebaseApp();
	const currentUser = useUser();
	const location = useLocation();

	const logOut = async () => {
		await firebase.auth().signOut();
	};

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Pokemon Card App</IonListHeader>
					{currentUser.data && (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === "/user" ? "light" : ""
								}
								routerLink={"/user"}
							>
								<IonIcon
									slot="start"
									md={"/assets/icon/menu/user.svg"}
									ios={"/assets/icon/menu/user.svg"}
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{currentUser.data.email}</IonLabel>
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
					{!currentUser.data && (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === loginMenu.url
										? "light"
										: ""
								}
								routerLink={loginMenu.url}
							>
								<IonIcon
									slot="start"
									md={loginMenu.iosIcon}
									ios={loginMenu.mdIcon}
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{loginMenu.title}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					)}
					{currentUser.data && (
						<IonMenuToggle autoHide={false}>
							<IonItem onClick={logOut} routerLink={"/"}>
								<IonIcon
									slot="start"
									md={"/assets/icon/menu/logout.svg"}
									ios={"/assets/icon/menu/logout.svg"}
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{"Log Out"}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					)}
				</IonList>
			</IonContent>
		</IonMenu>
	);
};

export default Menu;
