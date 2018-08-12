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
					class="Header__badge"
					:variant="getMatchesCountIconVariant"
					pill
					v-text="matchesCount"
					v-if="isMatchesCountVisible"/>

			</span>


			<span class="Header__item"
				@click="onShipClicked">

				<i class="Header__icon icon ion-ios-boat"/>

				<b-badge
					class="Header__badge"
					:variant="getMessagesCountIconVariant"
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
			matchesCount: 'ship/matchesCount',
			matchesUnread: 'ship/matchesUnread',
			messagesCount: 'ship/messagesCount',
			messagesUnread: 'ship/messagesUnread'
		}),
		isMatchesCountVisible() {
			return this.matchesCount > 0;
		},
		isMessagesCountVisible() {
			return this.messagesCount > 0;
		},
		getMatchesCountIconVariant() {
			if (this.matchesUnread) return 'danger';
			return 'primary';
		},
		getMessagesCountIconVariant() {
			if (this.messagesUnread) return 'danger';
			return 'primary';
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
$background: $Theme-Alt-Colour;

.Header{
	color: $iconColour;
	background: $background;

	&__item {
		width: 30%;
		margin: 0 1.1%;
		display: inline-block;
		text-align: center;
		font-size: 3rem;
		cursor: pointer;
		position: relative;
	}

	&__icon {
		width: 50px;
	}

	&__badge {
		font-size: 12px;
		position: absolute;
		top: 12px;
		right: 0;
	}
}

#matchMenuIcon {
	margin-top: -6px;
}

</style>
