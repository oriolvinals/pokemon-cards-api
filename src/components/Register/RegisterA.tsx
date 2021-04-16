import { IonButton, IonInput, IonItem, IonLabel, IonToast } from "@ionic/react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const RegisterA = () => {
	const history = useHistory();
	const [showToast, setShowToast] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [messageError, setMessageError] = useState("");

	const register = async () => {
		console.log("register");
	};

	return (
		<div className="fixed z-50 w-full h-full flex items-center justify-center flex-col bg-black bg-opacity-60 space-y-3">
			<IonLabel className="bold -mt-48 text-xl p-5 w-full text-center">
				Register
			</IonLabel>
			<IonItem className="rounded-xl w-10/12">
				<IonInput
					value={email}
					type="email"
					placeholder="Enter email"
					onIonChange={(e) => setEmail(e.detail.value!)}
				/>
			</IonItem>
			<IonItem className="rounded-xl w-10/12">
				<IonInput
					value={password}
					type="password"
					placeholder="Enter password"
					onIonChange={(e) => setPassword(e.detail.value!)}
				/>
			</IonItem>
			<IonButton className="mt-3 rounded-xl" onClick={register}>
				Register
			</IonButton>
			<IonLabel>
				<Link
					to="/login"
					className="bold text-sm p-5 text-white w-full text-center"
				>
					Already registered? Login here
				</Link>
			</IonLabel>
			<IonToast
				isOpen={showToast}
				onDidDismiss={() => setShowToast(false)}
				message={messageError}
				duration={5000}
				position="bottom"
			/>
		</div>
	);
};

export default RegisterA;
