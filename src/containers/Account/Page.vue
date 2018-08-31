<template>
	<div class="Account">

		<h1 class="Account__title">Account</h1>

		<h3 class="Account__title">User</h3>

		<div class="App__inner">
			<div class="Account__user">

				<b-img
					class="Account__image"
					:src="photoURL"
					thumbnail=""/>

				<b-form-group
					label="Display Name"
					label-for="displayName">
					<b-form-input
						id="displayName"
						v-model.trim="user.displayName"
						disabled/>
				</b-form-group>


			</div>
			<b-button @click="signOut">
				Sign Out
			</b-button>

			{{user}}
			<br>
			<br>
			{{userInfo}}

		</div>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		...mapGetters({
			user: 'auth/user',
			userInfo: 'ship/userInfo'
		}),
		photoURL() {
			if (!this.user) return null;
			const url = `https://graph.facebook.com/${this.user.uid}/picture?height=500`;
			return url;
		}
	},
	methods: {
		...mapActions({
			signOut: 'auth/signOut',
			fetch: 'ship/fetchUserInfo'
		})
	},
	created() {
		this.fetch();
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

	&__image {
		width: 100%;
	}

}
</style>
