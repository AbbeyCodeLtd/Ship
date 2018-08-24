<template>
	<div class="Login">

		<h1 class="Login__title">Ship</h1>

		<b-img
			class="Login__logo"
			src="/static/images/ship.png"/>

		<b-button
			class="Login__login"
			size="lg"
			variant="primary"
			v-text="'Login with facebook'"
			@click="signIn"/>

		<!-- Facebook button, currently disabled -->
		<!-- <div
			class="Login__login fb-login-button"
			data-max-rows="1"
			data-size="medium"
			data-button-type="continue_with"
			data-auto-logout-link="false"
			data-use-continue-as="true"
			data-scope="public_profile user_friends"
			data-onlogin="window.location.replace('/')"/> -->

	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		...mapActions({
			signIn: 'auth/authorize'
		})
	}
};
</script>


<style lang="scss">

.Login {
	position: fixed;
	top: 0;
	padding-top: 3rem;
	min-height: 100vh;

	&__title {
		text-align: center;
		text-transform: uppercase;
	}

	&__logo {
		width: 300px;
		margin: auto;
		display: block;
	}

	&__login {
		display: block !important;
		margin: auto;
		margin-top: 4rem;
		text-align: center;
	}

}
</style>
