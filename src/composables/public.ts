function deal(str: string): string {
	let result = str.replace(/<[^>]+>|(^\s*)|(\s*$)|&nbsp;/gi, "");
	return result;
}

export { deal };
