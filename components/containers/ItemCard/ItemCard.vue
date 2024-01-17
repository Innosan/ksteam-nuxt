<script setup lang="ts">
import type { PropType } from "vue";
import { getConvertedPrice, type SteamItem } from "~/types/SteamItem";
import ItemTabs from "~/components/containers/ItemCard/ItemTabs.vue";
import { currentCurrencyRate } from "~/utils/dummyData";
import { useFavoriteItemsStore } from "~/stores/favoriteItemsStore";

const favoriteItemsStore = useFavoriteItemsStore();

const appConfig = useAppConfig();

const props = defineProps({
	steamItem: {
		type: Object as PropType<SteamItem>,
		required: true,
	},
});

const convertedPrice = computed(() => {
	return getConvertedPrice(props.steamItem.price, currentCurrencyRate);
});
</script>

<template>
	<UCard>
		<template #header>
			<div class="flex gap-4 items-center">
				<img
					:src="steamItem.image"
					:alt="steamItem.title + 'image'"
					class="w-[120px]"
				/>
				<ItemTabs
					:converted-price="convertedPrice"
					v-if="!appConfig.isMobile"
					:steam-item="steamItem"
				/>
			</div>
		</template>
		<div class="flex gap-4 items-center">
			<p class="font-bold text-xl">{{ steamItem.title }}</p>
			<p class="opacity-70">${{ steamItem.price }}</p>
		</div>
		<template #footer>
			<ItemTabs
				:converted-price="convertedPrice"
				v-if="appConfig.isMobile"
				:steam-item="steamItem"
			/>
			<div v-else class="flex gap-4">
				<ItemCalculator
					:steam-item="steamItem"
					:converted-price="convertedPrice"
				/>
				<UTooltip
					text="Add to favorites"
					v-if="!favoriteItemsStore.isItemInFavorite(steamItem.title)"
				>
					<UButton
						@click="favoriteItemsStore.addFavoriteItem(steamItem)"
						leading-icon="i-heroicons-heart"
					/>
				</UTooltip>
				<UTooltip v-else text="Remove from favorite">
					<UButton
						@click="
							favoriteItemsStore.removeFavoriteItem(steamItem)
						"
						leading-icon="i-heroicons-heart-solid"
					/>
				</UTooltip>
			</div>
		</template>
	</UCard>
</template>

<style scoped></style>
