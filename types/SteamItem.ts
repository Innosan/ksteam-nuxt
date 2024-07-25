import type { Currency } from "~/types/Currency";

export type SteamItem = {
	title: string;
	price: string;
	link: string;
	image: string;
	item_type: ItemType;
	app: SteamApp;
};

export type ItemType = {
	title: string;
	icon: string;
};

export type SteamApp = {
	id: number;
	title: string;
	icon: string;
};

export type ConvertedPrice = {
	tenge: number;
	rouble: number;
	dollar: number;
};

export function getConvertedPrice(
	price: string,
	currency: Currency,
): ConvertedPrice {
	return {
		tenge: (parseFloat(price) / currency.dollar) * currency.tenge * 0.87,
		rouble: (parseFloat(price) / currency.dollar) * 0.87,
		dollar: parseFloat(price) * 0.87,
	};
}
