import { currentCurrencyRate } from "~/utils/dummyData";

export type Currency = {
	date: string;
	tenge: number;
	rouble: number;
	dollar: number;
};

export const getConvertedItemPrice = (price: string) => {
	return Number(price) / currentCurrencyRate.dollar;
};
