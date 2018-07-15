<template>
<div class="AppHeader">
	<div class="App__inner App__inner--fullHeight">

		<b-link to="/">
			<h1 class="AppHeader__title App--center">
				Rachel Lewis
			</h1>
		</b-link>

		<menue
			class="AppHeader__menue App--center"
			:auto="true"/>

	</div>
</div>
</template>

<script>
import Menue from './Menue';

export default {
	components: {
		Menue
	}
};

</script>

<style lang="scss">
@import '../settings';

.AppHeader{
	background: $Light-Grey;
	height: $Header-Height;
	position: fixed;
	color: $Dark-Grey;
	width: 100%;
	z-index: 10;

	&__title{
		height: $Header-Height / 2;
		color: $Dark-Grey;
		margin: auto;
		display: block;
		display: inline-block;
		left: 0;
	}

	&__menue{
		display: inline-block;
		right: 0;
		margin-top: 9px;
	}

}

</style>
