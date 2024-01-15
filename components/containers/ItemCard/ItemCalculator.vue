<script setup lang="ts">
import type { PropType } from "vue";
import type { SteamItem } from "~/types/SteamItem";

import { steamItems } from "~/utils/dummyData";

const props = defineProps({
	steamItem: {
		type: Object as PropType<SteamItem>,
		required: true,
	},
});

const isOpen = ref(false);

const availableBudget = ref(0);
</script>

<template>
	<UButton
		@click="isOpen = true"
		leading-icon="i-heroicons-calculator-solid"
		label="Calculate profit"
	/>

	<UModal v-model="isOpen">
		<UCard>
			<template #header>
				<p>{{ steamItem.title }}</p>
			</template>
			<div class="flex">
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
				<UDivider orientation="vertical" />
				<div>
					<p>
						{{ steamItem.price }}₽ x
						{{
							Math.floor(
								availableBudget / Number(steamItem.price),
							)
						}}
						=
						{{
							Number(steamItem.price) *
							Math.floor(
								availableBudget / Number(steamItem.price),
							)
						}}
					</p>
				</div>
			</div>

			<template #footer>
				<UDivider
					label="Available options"
					type="dashed"
					:ui="{ label: 'text-primary-500 dark:text-primary-400' }"
				/>
				<div class="flex gap-4 flex-wrap">
					<MarketCart
						v-for="item in marketItems"
						:market-item="item"
					/>
				</div>
			</template>
		</UCard>
	</UModal>
</template>

<style scoped></style>
