<script setup lang="ts">
import type { ConvertedPrice } from "~/types/SteamItem";
import type { PropType } from "vue";

const { $gsap } = useNuxtApp();

const props = defineProps({
	convertedPrice: {
		type: Object as PropType<ConvertedPrice>,
		required: true,
	},
	availableBudget: {
		type: Number,
		required: true,
	},
});

const availableItems = computed(() => {
	return Math.floor(props.availableBudget / props.convertedPrice.rouble);
});

const tweenedItems = reactive({
	number: availableItems.value,
});

const soldSummary = computed(() => {
	return props.convertedPrice.rouble * availableItems.value;
});

const tweenedSummary = reactive({
	number: soldSummary.value,
});

watch(availableItems, (n) => {
	$gsap.to(tweenedItems, { duration: 0.5, number: Number(n) || 0 });
});

watch(soldSummary, (n) => {
	$gsap.to(tweenedSummary, { duration: 0.5, number: Number(n) || 0 });
});
</script>

<template>
	<div class="flex flex-col items-center gap-2 cursor-default">
		<UTooltip text="Price of one item">
			<p class="text-xl font-black">
				{{ convertedPrice.rouble.toFixed(2) }}₽
			</p>
		</UTooltip>

		<UIcon name="i-heroicons-x-mark" />

		<UTooltip text="Available items to buy">
			<p class="text-xl font-black">
				{{ tweenedItems.number.toFixed(0) }}
			</p>
		</UTooltip>

		<UDivider orientation="horizontal" icon="i-heroicons-arrow-down" />

		<UTooltip text="Total profit">
			<p
				class="text-2xl border-primary-400 font-black p-2 border-2 border-dotted rounded-xl"
			>
				{{ tweenedSummary.number.toFixed(2) }}₽
			</p>
		</UTooltip>
	</div>
</template>

<style scoped></style>
