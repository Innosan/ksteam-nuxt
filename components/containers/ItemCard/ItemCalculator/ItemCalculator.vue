<script setup lang="ts">
import type { PropType } from "vue";
import type { ConvertedPrice, SteamItem } from "~/types/SteamItem";

import { useMarketItemsStore } from "~/stores/marketItemsStore";

const marketItemsStore = useMarketItemsStore();

const props = defineProps({
	steamItem: {
		type: Object as PropType<SteamItem>,
		required: true,
	},
	convertedPrice: {
		type: Object as PropType<ConvertedPrice>,
		required: true,
	},
});

const isOpen = ref(false);

const availableBudget = ref(500);
</script>

<template>
	<UButton
		@click="isOpen = true"
		leading-icon="i-heroicons-calculator-solid"
		label="Calculate profit"
	/>

	<UModal v-model="isOpen">
		<UCard :ui="{ body: { base: 'grid grid-cols-3' } }">
			<!-- Item Title -->
			<template #header>
				<div class="flex justify-between items-center">
					<div class="flex gap-2 items-center">
						<UIcon
							:name="steamItem.item_type.icon"
							dynamic
							class="w-6 h-6"
						/>
						<p class="font-black text-2xl">{{ steamItem.title }}</p>
					</div>
					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="isOpen = false"
					/>
				</div>
			</template>

			<!-- Calculator window -->
			<div class="flex">
				<UFormGroup label="Available budget">
					<UInput
						type="number"
						placeholder="Enter value.."
						v-model="availableBudget"
					>
						<template #trailing>
							<span
								class="text-gray-500 dark:text-gray-400 text-xs"
								>₽</span
							>
						</template>
					</UInput>
				</UFormGroup>
			</div>

			<UDivider
				orientation="vertical"
				icon="i-heroicons-currency-dollar"
			/>

			<!-- Summary -->
			<SummaryCard
				:converted-price="convertedPrice"
				:available-budget="availableBudget"
			/>

			<!-- Available options -->
			<template #footer>
				<UDivider
					label="Available options"
					type="dashed"
					:ui="{ label: 'text-primary-500 dark:text-primary-400' }"
				/>
				<div
					v-if="marketItemsStore.isMarketItemsLoading"
					class="flex gap-4 flex-wrap"
				>
					<MarketCard
						v-for="item in marketItemsStore.marketItems"
						:market-item="item"
					/>
				</div>
				<div v-else-if="!marketItemsStore.marketItems.status">
					<p>Error occurred!</p>
				</div>
				<UButton
					v-else
					@click="marketItemsStore.fetchMarketItems(steamItem.title)"
					>See options</UButton
				>
			</template>
		</UCard>
	</UModal>
</template>

<style scoped></style>
