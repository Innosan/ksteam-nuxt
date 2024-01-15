<script setup lang="ts">
import type { PropType } from "vue";
import type { SteamItem } from "~/types/SteamItem";
import ItemTabs from "~/components/containers/ItemCard/ItemTabs.vue";

const appConfig = useAppConfig();

const props = defineProps({
	steamItem: {
		type: Object as PropType<SteamItem>,
		required: true,
	},
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
				<ItemTabs v-if="!appConfig.isMobile" :steam-item="steamItem" />
			</div>
		</template>
		<div class="flex gap-4 items-center">
			<p class="font-bold text-xl">{{ steamItem.title }}</p>
			<p class="opacity-70">${{ steamItem.price }}</p>
			-
			<p class="opacity-70">RUB {{ steamItem.price }}0</p>
		</div>
		<template #footer>
			<ItemTabs v-if="appConfig.isMobile" :steam-item="steamItem" />
			<div v-else class="flex gap-4">
				<ItemCalculator :steam-item="steamItem" />
				<UTooltip text="Add to favorites">
					<UButton leading-icon="i-heroicons-heart" />
				</UTooltip>
			</div>
		</template>
	</UCard>
</template>

<style scoped></style>
