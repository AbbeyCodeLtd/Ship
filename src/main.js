import Vue from 'vue';
import Vuex from 'vuex';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'ionicons/dist/css/ionicons.css';
// import fb from './plugins/fb-sdk';

import storeConfig from './vuex/store';
import router from './router';
import App from './App';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(BootstrapVue);
// Vue.use(fb, {
// 	appId: '488907061521549',
// 	autoLogAppEvents: true,
// 	xfbml: true,
// 	version: 'v2.9'
// });
const store = new Vuex.Store(storeConfig);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
