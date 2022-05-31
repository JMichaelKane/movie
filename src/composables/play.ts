function urlProcess(url: string): {
	name: string;
	value: string;
}[] {
	let tmp = url.split("$$$");
	let result = [];
	for (const ele in tmp) {
		let tmp1 = tmp[ele].split("#");
		for (const ele2 in tmp1) {
			let tmp2 = tmp1[ele2].split("$");
			result.push({
				name: tmp2[0],
				value: tmp2[1],
			});
		}
	}
	return result;
}

export { urlProcess };
