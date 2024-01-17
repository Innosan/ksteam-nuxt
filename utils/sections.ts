import type { Section } from "~/types/Section";

export const sections = {
	"hot-items": <Section>{
		title: "Hot Items",
		description: "Top items from Steam Market",
		icon: "i-heroicons-fire-20-solid",
	},
	favorite: <Section>{
		title: "Favorite",
		description: "Only Yours favorite",
		icon: "i-heroicons-heart-solid",
	},
};
