<script setup lang="ts">
import { currentCurrencyRate } from "~/utils/dummyData";
</script>

<template>
	<UCard
		:ui="{
			body: {
				base: 'grid grid-cols-7',
				padding: 'px-2 py-2 sm:p-2',
			},
		}"
	>
		<div class="flex place-content-center self-center">
			<p>{{ currentCurrencyRate.date }}</p>
		</div>
		<UDivider orientation="vertical" />

		<div class="flex gap-2 items-center place-content-center">
			<p>{{ currentCurrencyRate.rouble }}</p>
			<span class="text-gray-500 dark:text-gray-400 text-xs">₽</span>
		</div>
		<UDivider orientation="vertical" label="=" />

		<div class="flex gap-2 items-center place-content-center">
			<p>{{ currentCurrencyRate.dollar }}</p>
			<span class="text-gray-500 dark:text-gray-400 text-xs">$</span>
		</div>
		<UDivider orientation="vertical" label="=" />

		<div class="flex gap-2 items-center place-content-center">
			<p>{{ currentCurrencyRate.tenge }}</p>
			<span class="text-gray-500 dark:text-gray-400 text-xs">₸</span>
		</div>
	</UCard>
</template>
