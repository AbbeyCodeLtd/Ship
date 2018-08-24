<template>
	<div class="App">

		<app-header/>

		<router-view class="App__wrapper"/>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppHeader from './components/AppHeader';

export default {
	name: 'App',
	components: {
		AppHeader
	},
	computed: {
		...mapGetters({
			user: 'auth/user'
		}),
		doAuth() {
			if (this.$route.name === 'Login') return false;
			return true;
		}
	},
	methods: {
		...mapActions({
			authorize: 'auth/authorize'
		}),
		attemptAuth() {
			if (this.doAuth) this.authorize();
		}
	},
	created() {
		this.attemptAuth();
	}
};
</script>

<style lang="scss">
@import './settings';

.App {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: $Background-Colour;
	font-family: $Font-Family;
	color: $Text-Colour;

	&__inner {
		width:  $Frame-Width;
		margin: auto;
		position: relative;

		&--fullHeight {
			height: 100%;
		}

		@media all and (max-width: $Frame-Width) {
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}

	}

	&__wrapper {
		background: $Background-Colour;
		float: left;
		width: 100%;
		padding-top: 1rem;
		min-height: calc(100vh - #{$Header-Height});
	}

	&--center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

}

</style>
