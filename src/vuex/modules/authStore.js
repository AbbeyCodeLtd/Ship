/**
 * Authentication module
 * 	- works with Firebase to Provide the app with basic authentication
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
		async authorize({ state, commit, rootState }) {
			if (state.user) return state.user;
			const result = await rootState.firebase.auth().signInWithPopup(rootState.provider);
			const user = result.user;
			commit('SET_USER', user);
			window.location.replace('/');
			return result;
		},
		async signOut({ commit, rootState }) {
			const result = await rootState.firebase.auth().signOut();
			// const result = await Vue.FB.logout();
			commit('SET_USER', null);
			window.location.replace('/login');
			return result;
		}
	},
	getters: {
		user: state => state.user
	}
};
