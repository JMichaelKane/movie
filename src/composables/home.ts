import QS from "qs";
async function Get(url: string, params: Object): Promise<any> {
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
	return data;
}



export { Get };
