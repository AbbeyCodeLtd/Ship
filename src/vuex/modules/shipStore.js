import axios from 'axios';

export default {
	namespaced: true,
	state: {
		path: 'ship',
		matchesCount: null,
		messagesCount: null,
		matchesUnread: null,
		messagesUnread: null,
		crushResults: [],
		userInfo: null
	},
	mutations: {
		SET_MESSAGES_COUNT(state, messagesCount) {
			state.messagesCount = messagesCount;
		},
		SET_MATCHES_COUNT(state, matchesCount) {
			state.matchesCount = matchesCount;
		},
		SET_MESSAGES_UNREAD(state, messagesUnread) {
			state.messagesUnread = messagesUnread;
		},
		SET_MATCHES_UNREAD(state, matchesUnread) {
			state.matchesUnread = matchesUnread;
		},
		SET_CRUSH_RESULTS(state, crushResults) {
			state.crushResults = crushResults;
		},
		SET_USER_INFO(state, userInfo) {
			state.userInfo = userInfo;
		}
	},
	actions: {
		async loadMatches({ state, commit }) {
			// #Todo: implement this functionality properly
			console.error('loadMatches is not yet a thing.');
			const snap = await state.matchesRef.once('value');
			const matches = snap.val().map((match, i) => {
				match._id = i;
				return match;
			});
			commit('SET_MATCHES', matches);
		},
		fetchMockMessagesAndMatches({ commit }) {
			console.warn('setMockMessagesAndMatches called...');
			commit('SET_MESSAGES_COUNT', 7);
			commit('SET_MATCHES_COUNT', 13);
			commit('SET_MESSAGES_UNREAD', true);
		},
		async fetchCrushSearchResults({ commit, rootGetters }, searchTerm) {
			const uid = rootGetters['auth/user'].providerData[0].uid;
			const path = `https://us-central1-newagent-1cb47.cloudfunctions.net/fetchMutualFriends?uid=${uid}`;
			const results = await axios.get(path);
			let crushResults = results.data.data;
			crushResults = crushResults.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
			commit('SET_CRUSH_RESULTS', crushResults);
		},
		async fetchUserInfo({ commit, rootGetters }) {
			const uid = rootGetters['auth/user'].providerData[0].uid;
			const token = rootGetters['auth/facebookToken'];
			const path = `https://graph.facebook.com/${uid}?fields=first_name,birthday,gender&access_token=${token}`;
			const result = await axios.get(path, {
				headers: {
					authorization: `bearer ${token}`
				}
			});
			const userInfo = result.data;
			commit('SET_USER_INFO', userInfo);
			return userInfo;
		}
	},
	getters: {
		matchesCount: state => state.matchesCount,
		messagesCount: state => state.messagesCount,
		matchesUnread: state => state.matchesUnread,
		messagesUnread: state => state.messagesUnread,
		crushResults: state => state.crushResults,
		userInfo: state => state.userInfo
	}
};
