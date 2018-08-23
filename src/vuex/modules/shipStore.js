import Vue from 'vue';

export default {
	namespaced: true,
	state: {
		path: 'ship',
		matchesCount: null,
		messagesCount: null,
		matchesUnread: null,
		messagesUnread: null
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
		fetchCrushSearchResults({ rootGetters }) {
			const uid = rootGetters['auth/user'].authResponse.userID;
			const path = `/${uid}/friends`;
			const token = rootGetters['auth/user'].authResponse.accessToken;
			Vue.FB.api(path, 'GET', { access_token: token }, response => {
				console.log(response);
			});
		}
	},
	getters: {
		matchesCount: state => state.matchesCount,
		messagesCount: state => state.messagesCount,
		matchesUnread: state => state.matchesUnread,
		messagesUnread: state => state.messagesUnread
	}
};
