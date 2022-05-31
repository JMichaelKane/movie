let base_url: string;

if (import.meta.env.DEV) {
	base_url = "http://localhost:8000/";
} else {
	base_url = "/";
}

// console.log(base_url);

export { base_url };
