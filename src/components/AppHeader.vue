<template>
<div class="Header">
	<div class="App__inner App__inner--fullHeight"
		sele>

			<span
				class="float-left;"
				@click="onSettingsButtonClicked">

				<b-img
					class="Header__icon--small"
					src="/static/icons/settings.png"/>

			</span>

			<span class="Header__item Header--inline">

				<b-badge
					class="Header__badge"
					:variant="getMatchesCountIconVariant"
					pill
					v-text="matchesCount"
					v-if="isMatchesCountVisible"/>

				<b-img
					class="Header__icon"
					id="matchMenuIcon"
					src="/static/icons/ship.png"
					@click="onMatchButtonClicked"/>

				<b-img
					class="Header__icon"
					id="matchMenuIcon"
					src="/static/icons/message.png"
					@click="onMessageButtonClicked"/>

				<b-badge
					class="Header__badge"
					:variant="getMessagesCountIconVariant"
					pill
					v-text="messagesCount"
					v-if="isMessagesCountVisible"/>


			</span>

			<span
				class="float-right"
				@click="onSearchButtonClicked">

				<b-img
					class="Header__icon--small"
					src="/static/icons/search.png"
					@click="onSearchButtonClicked"/>

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
			matchesUnread: 'matchesUnread',
			messagesCount: 'messagesCount',
			messagesUnread: 'messagesUnread'
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
		onSettingsButtonClicked() {
			alert('Settings functionality not yet implemented...');
		},
		onMatchButtonClicked() {
			alert('Ship functionality not yet implemented...');
		},
		onMessageButtonClicked() {
			alert('Message functionality not yet implemented...');
		},
		onSearchButtonClicked() {
			alert('Search functionality not yet implemented...');
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
	position: relative;
	height: 75px;
	user-select: none;

	&__item {
		text-align: center;
		font-size: 3rem;
		cursor: pointer;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&__icon {
		width: 50px;

		&--small {
			width: 30px;
			margin-top: 25px;
		}
	}

	&__badge {
		font-size: 12px;
		position: absolute;
		top: 12px;
		right: 0;
	}

	&--inline {
		* {
			display: inline-block;
		}
	}
}
</style>
