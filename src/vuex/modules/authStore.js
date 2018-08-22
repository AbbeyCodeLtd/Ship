/**
 * Authentication module
 * 	- works with Firebase to Provide the app with basic authentication
 *  - requires email and password accounts to be enabled in the firebase console
 */

export default {
	namespaced: true,
	state: {
		user: null
	},
	mutations: {
		SET_USER(state, user) {
			state.user = user;
		}
	},
	actions: {
		async authorize({ commit, dispatch }) {
			dispatch('signOut');
			window.FB.getLoginStatus(response => {
				if (response.status === 'connected') {
					commit('SET_USER', response);
				} else {
					window.location.replace('/login');
				}
			});
		},
		async signOut({ commit, rootState }) {
			const result = await rootState.firebase.auth().signOut();
			commit('SET_USER', null);
			return result;
		}
	},
	getters: {
		user: state => state.user
	}
};
