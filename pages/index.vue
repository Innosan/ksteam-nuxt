<script setup lang="ts">
import { useHotItemsStore } from "~/stores/hotItemsStore";

const hotItemsStore = useHotItemsStore();
hotItemsStore.fetchHotItems();
</script>

<template>
	<SectionHeading :section="sections['hot-items']" />

	<ClientOnly>
		<USkeleton v-if="hotItemsStore.isItemsFetching" class="w-96 h-12" />
		<HotItemsCarousel v-else />
	</ClientOnly>
</template>
