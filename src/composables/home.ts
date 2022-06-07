import QS from "qs";
import { Ref } from "vue";

interface Movie {
	movies: Array<any>;
	pgCount: number;
}

async function Get(url: string, params: Object, variable: Ref<Movie>): Promise<any> {
	const response = await fetch(url, {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: QS.stringify(params),
	});
	const data = await response.json();
	variable.value = data;
	return data;
}

export { Get };
export type { Movie };
