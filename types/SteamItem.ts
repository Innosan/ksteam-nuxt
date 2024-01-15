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
