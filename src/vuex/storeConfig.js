import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAbm7-uLDKGBdBbYrrWzDutc2tNwdj3OTc',
	authDomain: 'newagent-1cb47.firebaseapp.com',
	databaseURL: 'https://newagent-1cb47.firebaseio.com',
	projectId: 'newagent-1cb47',
	storageBucket: 'newagent-1cb47.appspot.com',
	messagingSenderId: '818684151536'
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
const matchesRef = db.ref('matches');

const store = {
	state: {
		matchesRef,
		matchesCount: null,
		messagesCount: null
	},
	mutations: {
		SET_MESSAGES_COUNT(state, messagesCount) {
			this.state.messagesCount = messagesCount;
		},
		SET_MATCHES_COUNT(state, matchesCount) {
			this.state.matchesCount = matchesCount;
		}
	},
	actions: {
		async loadMatches({ state, commit }) {
			// #Todo: implement this functionality properly
			console.error('loadMatches is not yet a thing.');
			const snap = await state.matchesRef.once('value');
			const matches = snap.val().map((match, i) => {
				match._id = i;
				return match;
			});
			commit('SET_MATCHES', matches);
		},
		setMockMessagesAndMatchesCounts({ commit }, messagesCount, matchesCount) {
			console.warn('setMockMessagesAndMatches called...');
			commit('SET_MESSAGES_COUNT', messagesCount);
			commit('SET_MATCHES_COUNT', matchesCount);
		}
	},
	getters: {
		matchesCount: state => state.matchesCount,
		messagesCount: state => state.messagesCount
	}
};

export default store;
