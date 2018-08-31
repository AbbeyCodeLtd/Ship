<template>
	<div class="Crush">

		<div class="App__inner">

			<h1 class="Crush__title">Crush</h1>

			<b-form-group
				label="Search for your crush..."
				label-for="crushSearch">
				<b-form-input
					id="crushSearch"
					v-model.trim="searchTerm"/>
			</b-form-group>

			<b-button
				@click="fetch"
				v-text="'Search'"/>

		</div>

		{{crushResults}}


	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			searchTerm: null
		};
	},
	computed: {
		...mapGetters({
			user: 'auth/user',
			crushResults: 'ship/crushResults'
		})
	},
	methods: {
		...mapActions({
			signOut: 'auth/signOut',
			crushSearch: 'ship/fetchCrushSearchResults'
		}),
		async fetch() {
			await this.crushSearch(this.searchTerm);
		}
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
