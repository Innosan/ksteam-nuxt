<script setup lang="ts">
import type { PropType } from "vue";
import type { SteamItem } from "~/types/SteamItem";
import { getConvertedItemPrice } from "~/types/Currency";
import { useMarketItemsStore } from "~/stores/marketItemsStore";

const marketItemsStore = useMarketItemsStore();

const props = defineProps({
	steamItem: {
		type: Object as PropType<SteamItem>,
		required: true,
	},
});

const isOpen = ref(false);

const availableBudget = ref(1000);

const availableCases = computed(() => {
	return Math.floor(
		availableBudget.value / getConvertedItemPrice(props.steamItem.price),
	);
});
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
			<div>
				<UFormGroup label="Available budget">
					<UInput
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
			<div class="self-center">
				<p>
					{{ getConvertedItemPrice(steamItem.price).toFixed(2) }}₽ x
					{{ availableCases }}
					=
					{{
						(
							getConvertedItemPrice(steamItem.price) *
							availableCases
						).toFixed(2)
					}}
				</p>
			</div>

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
