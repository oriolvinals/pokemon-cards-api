import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBvHGjqZ0blL33xXvlvt6yamhJyyopmbGo",
	authDomain: "pokemon-card-app-e09fc.firebaseapp.com",
	projectId: "pokemon-card-app-e09fc",
	storageBucket: "pokemon-card-app-e09fc.appspot.com",
	messagingSenderId: "223894453689",
	appId: "1:223894453689:web:de777ccd5c37fb346b8a68",
	measurementId: "G-PGPE1FHWRX",
};

firebase.initializeApp(firebaseConfig);

export const loginUser = async (email: string, password: string) => {
	try {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		return true;
	} catch (error) {
		return error;
	}
};

export const registerUser = async (email: string, password: string) => {
	try {
		await firebase.auth().createUserWithEmailAndPassword(email, password);
		return true;
	} catch (error) {
		return error;
	}
};

export const user = async () => {
	return firebase.auth().currentUser;
};

export const logOut = async () => {
	await firebase.auth().signOut();
};
