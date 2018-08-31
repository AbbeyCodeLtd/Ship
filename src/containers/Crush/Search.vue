<template>
	<div class="Crush">

		<div class="App__inner">

			<section class="Crush__search">

				<h1 class="Crush__title">Crush</h1>

				<b-form-group
					label="Search for your crush..."
					label-for="crushSearch">
					<b-form-input
						id="crushSearch"
						v-model.trim="searchTerm"
						@keydown.enter.native="fetch"/>
				</b-form-group>

				<b-button
					@click="fetch"
					v-text="'Search'"/>

			</section>

			<section class="Crush__results">
				<b-table
					:items="crushResults"
					:fields="crushFields"
					striped>
					<template slot="name" slot-scope="data">
						<b-link v-text="data.item.name"/>
					</template>
				</b-table>
			</section>


		</div>


	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	data() {
		return {
			searchTerm: null,
			crushFields: [
				{ key: 'name', label: 'Name' }
			]
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

	&__search {
		margin-bottom: 2rem;
	}

}
</style>
