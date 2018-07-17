<template>
	<div class="Home">

		<b-button
			class="App--center"
			@click="fetchMockMessagesAndMatches">
			Be popular!
		</b-button>


	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		...mapActions({
			fetchMockMessagesAndMatches: 'fetchMockMessagesAndMatches'
		})
	}
};
</script>

<style lang="scss">
@import '../../settings';

</style>
