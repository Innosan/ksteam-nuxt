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
				<div class="flex gap-4">
					<IconedBadge
						tooltip="Type of an item"
						:icon="{ type: 'icon', name: steamItem.item_type.icon }"
						:label="steamItem.item_type.title"
					/>
					<IconedBadge
						tooltip="Game"
						:icon="{ type: 'image', name: steamItem.app.icon }"
						:label="steamItem.app.title"
					/>
				</div>
			</UCard>
			<UCard v-else-if="tabItem.key === 'prices'">
				<div class="flex gap-4">
					<UBadge> ${{ steamItem.price }} </UBadge>
					<UBadge class="opacity-70 hover:opacity-100 transition-all"
						>{{ Number(steamItem.price) * 80 }}₽</UBadge
					>
					<UBadge class="opacity-70 hover:opacity-100 transition-all"
						>{{ Number(steamItem.price) * 220 }}₸</UBadge
					>
				</div>
			</UCard>
		</template>
	</UTabs>
</template>

<style scoped></style>
