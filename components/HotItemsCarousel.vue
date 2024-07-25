<script setup lang="ts">
import { breakpoints, settings } from "~/utils/carousel";
import { useHotItemsStore } from "~/stores/hotItemsStore";
const hotItemsStore = useHotItemsStore();
</script>

<template>
	<VueCarousel
		v-bind="settings"
		:breakpoints="breakpoints"
		:wrap-around="true"
	>
		<VueSlide v-for="item in hotItemsStore.hotItems" :key="item.title">
			<div class="carousel__item">
				<ItemCard :steam-item="item" />
			</div>
		</VueSlide>

		<template #addons>
			<VuePagination />
			<VueNavigation />
		</template>
	</VueCarousel>
</template>

<style scoped></style>
