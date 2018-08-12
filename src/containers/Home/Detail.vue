<template>
	<div class="Home">

		<section class="App--center">
			<b-button
				class="mb-3"
				@click="fetchMockMessagesAndMatches">
				Be popular!
			</b-button>

			<b-button
				@click="signIn">
				Sign In!
			</b-button>
		</section>


	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		...mapActions({
			fetchMockMessagesAndMatches: 'ship/fetchMockMessagesAndMatches',
			signIn: 'auth/signIn'
		})
	}
};
</script>

<style lang="scss">
@import '../../settings';

</style>
