import type { SteamItem } from "~/types/SteamItem";
import { fetchData } from "~/utils/storeUtils";

export const useHotItemsStore = defineStore("hot-items-store", () => {
	const hotItems = useState("hot-items-state", () => [<SteamItem>{}]);
	const isItemsFetching = useState("isItemsFetching", () => false);

	async function fetchHotItems() {
		isItemsFetching.value = true;

		hotItems.value = await fetchData("/get-hot-items");

		isItemsFetching.value = false;
	}

	return {
		hotItems,
		isItemsFetching,
		fetchHotItems,
	};
});
