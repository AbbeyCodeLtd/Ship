<template>
	<div class="App">

		<app-header/>

		<router-view class="App__wrapper"/>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from './components/AppHeader';

export default {
	name: 'App',
	components: {
		AppHeader
	},
	computed: {
		...mapGetters({
			user: 'auth/user'
		})
	},
	created() {
		if (!this.user && this.$route.name !== 'Login') window.location.replace('/login');
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
		min-height: calc(100vh - #{$Footer-Height});
	}

	&--center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

}

</style>
