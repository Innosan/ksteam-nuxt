<script setup lang="ts">
import type { PropType } from "vue";
import type { SteamItem } from "~/types/SteamItem";

import { itemTabs } from "~/utils/itemTabs";

const props = defineProps({
	steamItem: {
		type: Object as PropType<SteamItem>,
		required: true,
	},
});
</script>

<template>
	<UTabs :items="itemTabs">
		<template
			#default="{ item, index, selected }"
			:class="selected ? 'bg-primary-500' : ''"
		>
			<div class="flex items-center gap-2 relative truncate">
				<UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

				<span class="font-bold">{{ item.label }}</span>

				<span
					v-if="selected"
					class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
				/>
			</div>
		</template>
		<template #item="{ item: tabItem }">
			<UCard v-if="tabItem.key === 'info'">
				<p>{{ steamItem.item_type.title }}</p>
				<p>{{ steamItem.app.title }}</p>
			</UCard>
			<UCard v-else-if="tabItem.key === 'prices'">
				<p>${{ steamItem.price }}</p>
				<p>RUB {{ Number(steamItem.price) * 80 }}</p>
				<p>KZT {{ Number(steamItem.price) * 220 }}</p>
			</UCard>
		</template>
	</UTabs>
</template>

<style scoped></style>
