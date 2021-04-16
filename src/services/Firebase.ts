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
	const res = await firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((user) => user)
		.catch((error) => error);
	return res;
};
