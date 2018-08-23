/**
 * Authentication module
 * 	- works with Firebase to Provide the app with basic authentication
 */
import Vue from 'vue';

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
		async authorize({ commit }) {
			Vue.FB.getLoginStatus(response => {
				if (response.status === 'connected') {
					commit('SET_USER', response);
				} else {
					window.location.replace('/login');
				}
			});
		},
		async signOut({ commit }) {
			const result = await Vue.FB.logout();
			commit('SET_USER', null);
			window.location.replace('/login');
			return result;
		}
	},
	getters: {
		user: state => state.user
	}
};
