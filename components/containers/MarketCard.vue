<script setup lang="ts">
import type { PropType } from "vue";
import type { MarketItem } from "~/types/MarketItem";

const props = defineProps({
	marketItem: {
		type: Object as PropType<MarketItem>,
		required: true,
	},
});
</script>

<template>
	<ULink :to="marketItem.link">
		{{ marketItem.title }} - {{ marketItem.price }}₽
	</ULink>
</template>

<style scoped></style>
