import firebase from 'firebase';
import Cookies from 'js-cookie';
import VuexPersistence from 'vuex-persist';
import authStore from './modules/authStore';
import shipStore from './modules/shipStore';

// Firebase connection. Since this info is public it's important to have security rules set.
const firebaseConfig = {
	apiKey: 'AIzaSyAbm7-uLDKGBdBbYrrWzDutc2tNwdj3OTc',
	authDomain: 'newagent-1cb47.firebaseapp.com',
	databaseURL: 'https://newagent-1cb47.firebaseio.com',
	projectId: 'newagent-1cb47',
	storageBucket: 'newagent-1cb47.appspot.com',
	messagingSenderId: '818684151536'
};

// Set Facebook as our authentication provider
const provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
	display: 'popup'
});

// Create a persisted state cookie
const vuexCookie = new VuexPersistence({
	restoreState: key => Cookies.getJSON(key),
	saveState: (key, state) => Cookies.set(key, state, {
		expires: 3
	}),
	modules: ['auth'] // only save user module
});

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();

const store = {
	state: {
		db,
		firebase,
		provider
	},
	modules: {
		auth: authStore,
		ship: shipStore
	},
	plugins: [
		vuexCookie.plugin
	]
};

export default store;
