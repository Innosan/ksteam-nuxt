<script setup lang="ts">
import { useFavoriteItemsStore } from "~/stores/favoriteItemsStore";

const favoriteItemsStore = useFavoriteItemsStore();
</script>

<template>
	<SectionHeading :section="sections['favorite']" />

	<ClientOnly>
		<ItemCard
			v-for="item in favoriteItemsStore.getFavoriteItems"
			:steam-item="item"
		/>
		<div v-if="!favoriteItemsStore.getFavoriteItems.length">
			<p>No fav yet.</p>
		</div>
	</ClientOnly>
</template>

<style scoped></style>
