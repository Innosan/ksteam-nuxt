export async function fetchData(route: string, itemToFetch: string = "") {
	const { data: allData, pending } = await useAsyncData(
		route + itemToFetch,
		async () => {
			const { data } = await useFetch(
				"https://ksteam-api.onrender.com" + route + itemToFetch,
			);
			return data;
		},
	);

	console.log(allData.value);

	return allData.value;
}
