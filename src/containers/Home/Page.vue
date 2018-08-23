<template>
	<div class="Home">

			<b-button
				class="mb-3"
				@click="fetchMockMessagesAndMatches">
				Be popular!
			</b-button>

			<br>

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
			fetchMockMessagesAndMatches: 'ship/fetchMockMessagesAndMatches'
		})
	}
};
</script>

<style lang="scss">
.Home {
	overflow: scroll;
}

</style>
