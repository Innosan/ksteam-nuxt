import type { SteamItem } from "~/types/SteamItem";

export const useFavoriteItemsStore = defineStore("favorite-store", {
	state: () => ({
		favoriteItems: [<SteamItem>{}],
	}),
	getters: {
		getFavoriteItems(): SteamItem[] {
			return this.favoriteItems;
		},
	},
	actions: {
		addFavoriteItem(item: SteamItem) {
			this.favoriteItems.push(item);
		},
		removeFavoriteItem(item: SteamItem) {
			this.favoriteItems = this.favoriteItems.filter(
				(favoriteItem) => favoriteItem.title !== item.title,
			);
		},
		isItemInFavorite(itemTitle: string) {
			return this.favoriteItems.some((item) => item.title === itemTitle);
		},
	},
	persist: {
		storage: persistedState.localStorage,
	},
});
