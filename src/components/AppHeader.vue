<template>
<div class="Header">
	<div class="App__inner App__inner--fullHeight">

			<span
				class="Header__item"
				@click="onSearchClicked">

				<i class="Header__icon icon ion-ios-search"/>

			</span>

			<span
				class="Header__item"
				@click="onMatchClicked">

				<b-img
					class="Header__icon"
					id="matchMenuIcon"
					src="/static/icons/fishing.svg"/>

				<b-badge
					variant="light"
					pill
					v-text="matchesCount"
					v-if="isMatchesCountVisible"/>

			</span>


			<span class="Header__item"
				@click="onShipClicked">

				<i class="Header__icon icon ion-ios-boat"/>

				<b-badge
					variant="light"
					pill
					v-text="messagesCount"
					v-if="isMessagesCountVisible"/>

			</span>

	</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			matchesCount: 'matchesCount',
			messagesCount: 'messagesCount'
		}),
		isMatchesCountVisible() {
			return this.matchesCount > 0;
		},
		isMessagesCountVisible() {
			return this.messagesCount > 0;
		}
	},
	methods: {
		onSearchClicked() {
			alert('Crush Search functionality not yet implemented...');
		},
		onMatchClicked() {
			alert('Crush Match functionality not yet implemented...');
		},
		onShipClicked() {
			alert('Ship functionality not yet implemented...');
		}
	}
};
</script>

<style lang="scss">
@import '../settings';

$iconColour: $Theme-Colour;

.Header{
	color: $iconColour;

	&__item {
		width: 30%;
		margin: 0 1.1%;
		display: inline-block;
		text-align: center;
		font-size: 3rem;
		cursor: pointer;
	}

	&__icon {
		width: 50px;
	}
}

#matchMenuIcon {
	margin-top: -6px;
}

</style>
