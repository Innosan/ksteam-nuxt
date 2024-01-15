<script setup lang="ts">
const appConfig = useAppConfig();

// defining if app is in mobile width range
onMounted(() => {
	appConfig.isMobile = window.innerWidth <= 900;

	window.addEventListener("resize", () => {
		appConfig.isMobile = window.innerWidth <= 900;
	});
});

onUnmounted(() => {
	window.removeEventListener("resize", () => {
		appConfig.isMobile = window.innerWidth <= 900;
	});
});

// used for animation purposes
const route = useRoute();
</script>

<template>
	<div>
		<Header />
		<div class="page-container" v-auto-animate>
			<NuxtPage :key="route" />
		</div>
		<Footer />
	</div>
</template>
