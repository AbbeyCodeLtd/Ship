<template>
	<div class="Login">

		<h1 class="Login__title">Ship</h1>

		<b-img
			class="Login__logo"
			src="/static/images/ship.png"/>

		<div
			class="Login__login fb-login-button"
			data-max-rows="1"
			data-size="medium"
			data-button-type="continue_with"
			data-auto-logout-link="false"
			data-use-continue-as="true"
			data-scope="public_profile user_friends"
			data-onlogin="window.location.replace('/')"/>

	</div>
</template>

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
