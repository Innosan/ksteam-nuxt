<script setup lang="ts">
import type { PropType } from "vue";
import type { Section } from "~/types/Section";

const props = defineProps({
	section: {
		type: Object as PropType<Section>,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col gap-2">
		<div
			class="flex items-center gap-4 border-b-2 border-b-primary-400 pb-2 w-fit"
		>
			<UIcon
				stroke="primary"
				:name="section.icon"
				dynamic
				class="w-10 h-10"
				:key="section.icon"
			/>
			<h3 class="font-black text-4xl" :key="section.title">
				{{ section.title }}
			</h3>
		</div>
		<p class="font-bold opacity-70" :key="section.title">
			{{ section.description }}
		</p>
	</div>
</template>
