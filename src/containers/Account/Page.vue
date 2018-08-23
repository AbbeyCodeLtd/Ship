<template>
	<div class="Account">

		<h1 class="Account__title">Account</h1>

		<h3 class="Account__title">User</h3>

		{{user}}

		<div
			class="Account__Account fb-Account-button"
			data-max-rows="1"
			data-size="medium"
			data-button-type="continue_with"
			data-auto-logout-link="false"
			data-use-continue-as="true"
			data-onAccount="window.location.replace('/')"/>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			user: 'auth/user'
		})
	}
};
</script>


<style lang="scss">

.Account {
	position: fixed;
	top: 0;
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

	&__Account {
		display: block !important;
		margin: auto;
		margin-top: 4rem;
		text-align: center;
	}

}
</style>
