<script setup lang="ts">
import { steamItems } from "~/utils/dummyData";
</script>

<template>
	<SectionHeading :section="sections['hot-items']" />
	<div class="flex gap-4 flex-wrap">
		<ClientOnly>
			<ItemCard v-for="item in steamItems" :steamItem="item" />
		</ClientOnly>
	</div>
</template>

<style scoped></style>
