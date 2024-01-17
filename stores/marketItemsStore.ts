import type { MarketItem } from "~/types/MarketItem";
import { fetchData } from "~/utils/storeUtils";

export const useMarketItemsStore = defineStore("market-items-store", () => {
	const marketItems = useState("market-items-state", () => {});
	const isMarketItemsLoading = useState("isMarketItemsLoading", () => false);

	async function fetchMarketItems(title: string) {
		console.log(title);
		isMarketItemsLoading.value = true;
		marketItems.value = fetchData("/get-market-items/" + title);
		isMarketItemsLoading.value = false;
	}

	return {
		marketItems,
		isMarketItemsLoading,
		fetchMarketItems,
	};
});
