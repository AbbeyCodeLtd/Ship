<template>
	<div class="Landing">

		<h1 class="Landing__title">Ship</h1>

		<b-img
			class="Landing__logo"
			src="/static/images/ship.png"/>

		<div
			class="Landing__login fb-login-button"
			data-max-rows="1"
			data-size="medium"
			data-button-type="continue_with"
			data-auto-logout-link="false"
			data-use-continue-as="true"
			@click.prevent="authorize"/>

			{{user}}

	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			user: 'auth/user'
		})
	},
	methods: {
		...mapActions({
			authorize: 'auth/authorize'
		})
	}
};
</script>


<style lang="scss">

.Landing {
	position: relative;

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
		margin-top: 2rem;
		text-align: center;
	}

}
</style>
