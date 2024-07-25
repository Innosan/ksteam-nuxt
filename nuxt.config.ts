// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"vue3-carousel-nuxt",
		"@hypernym/nuxt-gsap",
		"@pinia-plugin-persistedstate/nuxt",
	],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	carousel: {
		prefix: "Vue",
	},

	css: ["~/assets/styles/main.css"],
});
