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

import { useHistory, useLocation } from "react-router-dom";
import { auth } from "../services/Firebase";

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

const Menu = () => {
	const location = useLocation();
	const history = useHistory();

	const handleLogOut = async () => {
		await auth.signOut();
		history.push("/");
	};

	return (
		<IonMenu contentId="main" type="overlay">
			<IonContent>
				<IonList id="inbox-list">
					<IonListHeader>Pokemon Card App</IonListHeader>
					{auth.currentUser && (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === "user" ? "light" : ""
								}
								routerLink={"/user"}
							>
								<IonIcon
									md={""}
									ios={""}
									slot="start"
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{auth.currentUser.email}</IonLabel>
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

					{!auth.currentUser && (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === "Login" ? "light" : ""
								}
								routerLink={"/login"}
							>
								<IonIcon
									md={"/assets/icon/menu/login.svg"}
									ios={"/assets/icon/menu/login.svg"}
									slot="start"
									className="h-10 w-10 mr-6"
								></IonIcon>
								<IonLabel>{"Login"}</IonLabel>
							</IonItem>
						</IonMenuToggle>
					)}

					{auth.currentUser && (
						<IonMenuToggle autoHide={false}>
							<IonItem
								color={
									location.pathname === "user" ? "light" : ""
								}
								onClick={handleLogOut}
								routerLink={"/"}
							>
								<IonIcon
									md={""}
									ios={""}
									slot="start"
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
