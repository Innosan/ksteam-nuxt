import type { SteamItem } from "~/types/SteamItem";

export const steamItems: SteamItem[] = [
	{
		title: "Dummy Game 1",
		price: "20",
		link: "https://store.steampowered.com/app/1",
		image: "https://cdn2.csgo.com//item/Chroma%203%20Case/100.png",
		item_type: {
			title: "Game",
			icon: "https://store.steampowered.com/app/1_icon.jpg",
		},
		app: {
			id: 1,
			title: "Dummy App 1",
			icon: "https://store.steampowered.com/app/1_app_icon.jpg",
		},
	},
	{
		title: "Dummy Game 2",
		price: "30",
		link: "https://store.steampowered.com/app/2",
		image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYynaSdJGhE74y0wNWIw_OlNuvXkDpSuZQmi--SrN-h3gey-Uo6YWmlIoCLMlhplhFFvwI",
		item_type: {
			title: "Game",
			icon: "https://store.steampowered.com/app/2_icon.jpg",
		},
		app: {
			id: 2,
			title: "Dummy App 2",
			icon: "https://store.steampowered.com/app/2_app_icon.jpg",
		},
	},
	{
		title: "Dummy Game 3",
		price: "30",
		link: "https://store.steampowered.com/app/3",
		image: "https://cdn2.csgo.com//item/Chroma%203%20Case/100.png",
		item_type: {
			title: "Game",
			icon: "https://store.steampowered.com/app/3_icon.jpg",
		},
		app: {
			id: 3,
			title: "Dummy App 3",
			icon: "https://store.steampowered.com/app/3_app_icon.jpg",
		},
	},
];
