<template>
	<div class="App">

		<app-header/>

		<router-view class="App__wrapper"/>


	</div>
</template>

<script>
import { mapActions } from 'vuex';
import AppHeader from './components/AppHeader';

export default {
	name: 'App',
	components: {
		AppHeader
	},
	methods: {
		...mapActions({
			fetchMockMessagesAndMatches: 'fetchMockMessagesAndMatches'
		})
	},
	created() {
		this.fetchMockMessagesAndMatches();
	}
};
</script>

<style lang="scss">
@import './settings';

.App {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: $Background-Colour;
	font-family: $Font-Family;
	color: $Text-Colour;

	&__inner {
		width:  $Frame-Width;
		margin: auto;
		position: relative;

		&--fullHeight {
			height: 100%;
		}

		@media all and (max-width: $Frame-Width) {
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}

	}

	&__wrapper {
		padding-top: $Header-Height;
		min-height: calc(100vh - #{$Footer-Height});
		background: $Background-Colour;
	}

	&--center {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

}

</style>
