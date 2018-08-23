<template>
	<div class="Crush">

		<h1 class="Crush__title">Crush</h1>

		<h3 class="Crush__title">User</h3>

		<div class="App__inner">
			<div class="Crush__user">
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

.Crush {

	&__title {
		text-align: center;
		text-transform: uppercase;
	}

	&__user {
		overflow-x: scroll;
		margin-bottom: 1rem;
	}

	&__Crush {
		display: block !important;
		margin: auto;
		margin-top: 4rem;
		text-align: center;
	}

}
</style>
