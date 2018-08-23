<template>
	<div class="Account">

		<h1 class="Account__title">Account</h1>

		<h3 class="Account__title">User</h3>

		<div class="App__inner">
			<div class="Account__user">
				{{user}}
			</div>
			<b-button @click="signOut">
				Sign Out
			</b-button>
		</div>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters({
			user: 'auth/user'
		})
	},
	methods: {
		...mapActions({
			signOut: 'auth/signOut'
		})
	}
};
</script>


<style lang="scss">

.Account {

	&__title {
		text-align: center;
		text-transform: uppercase;
	}

	&__user {
		overflow-x: scroll;
		margin-bottom: 1rem;
	}

	&__Account {
		display: block !important;
		margin: auto;
		margin-top: 4rem;
		text-align: center;
	}

}
</style>
