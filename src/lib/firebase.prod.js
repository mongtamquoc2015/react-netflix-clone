import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// We need a config here
const firebaseConfig = {
	apiKey: "AIzaSyDCBzCiTlQjed4_faZV0KGj675--TLmZaQ",
	authDomain: "netflix-clone-2304-67aac.firebaseapp.com",
	databaseURL: "https://netflix-clone-2304-67aac.firebaseio.com",
	projectId: "netflix-clone-2304-67aac",
	storageBucket: "netflix-clone-2304-67aac.appspot.com",
	messagingSenderId: "248359268612",
	appId: "1:248359268612:web:e9247c2e4c67b7436ea051",
	measurementId: "G-8MND6PBGCG"
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
