import Input from "../Advanced/Input";
import {
	IonButton,
	IonInput,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonRange,
} from "@ionic/react";
import React from "react";

const LoginA = () => {
	return (
		<div className="fixed z-50 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-60">
			<div>
				<p className="p-3">Email</p>
				<IonInput
					type="email"
					className="bg-gray-400 rounded-md bg-opacity-25"
				/>
			</div>
			<div>
				<p className="p-3">Password</p>
				<IonInput
					type="password"
					className="bg-gray-400 rounded-md bg-opacity-25"
				/>
			</div>
			<IonButton>Login</IonButton>
		</div>
	);
};

export default LoginA;
