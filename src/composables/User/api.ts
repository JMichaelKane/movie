import router from "../../router/router";
import { Ref } from "vue";
import { baseFetch } from "./http";
import { sources, moviesNum, categories, movies, LogInEd, sourceDetail } from "./data";
import { Source, Category, Movie, Class } from "./public";
import { newDetail, menuOptions, DefaultOptions } from "./menu";

function global() {
	if (!LogInEd.value) {
		GetMovieNum().then(() => {
			GetSources();
			GetCategories();
			GetMovies_panel();
		});
	}
}

function Login(account: string, password: string) {
	baseFetch("/user/login", {
		method: "POST",
		handle: false,
		body: {
			account: account,
			password: password,
		},
	}).then(async () => {
		await GetMovieNum();
		await GetSources();
		await GetCategories();
		await GetMovies_panel();
		LogInEd.value = true;
		router.push({ name: "panel" });
	});
}

function LogOut() {
	return baseFetch("/user/logout", {
		method: "GET",
		handle: false,
		body: {},
	});
}

async function GetMovieNum() {
	const data = await baseFetch("/user/count", {
		method: "GET",
		handle: false,
		body: {},
	});
	moviesNum.value = Number(data);
}

function GetMovies_panel() {
	return GetMovies(20, 1, movies);
}

async function GetMovies(num: number, pg: number, movies: Ref<Movie[]>, pgCount?: Ref<number>) {
	const data: any = await baseFetch("/user/list", {
		method: "POST",
		handle: true,
		body: {
			num: num,
			pg: pg,
		},
	});
	movies.value = [];
	for (const key of data.movies) {
		let movie: Movie = {
			id: key.id,
			name: key.name,
			description: key.description,
			duration: key.duration,
			director: key.director,
		};
		movies.value.push(movie);
	}
	// console.log(typeof pgCount);
	if (typeof pgCount != "undefined") {
		pgCount.value = data.pgCount;
	}
}

async function GetSourceMovies(
	id: string,
	num: number,
	pg: number,
	movies: Ref<Movie[]>,
	pgCount?: Ref<number>
) {
	const data: any = await baseFetch("/user/source/list", {
		method: "POST",
		handle: true,
		body: {
			id: id,
			num: num,
			pg: pg,
		},
	});
	movies.value = [];
	for (const key of data.movies) {
		let movie: Movie = {
			id: key.id,
			name: key.name,
			description: key.description,
			duration: key.duration,
			director: key.director,
		};
		movies.value.push(movie);
	}
	// console.log(typeof pgCount);
	if (typeof pgCount != "undefined") {
		pgCount.value = data.pgCount;
	}
}

function GetMoviesByKeyword(
	keyword: string,
	num: number,
	pg: number,
	movies: Ref<Movie[]>,
	pgCount?: Ref<number>
) {
	baseFetch("/user/search", {
		method: "POST",
		handle: true,
		body: {
			keyword: keyword,
			num: num,
			pg: pg,
		},
	}).then((data: any) => {
		movies.value = [];
		for (const key of data.movies) {
			let movie: Movie = {
				id: key.id,
				name: key.name,
				description: key.description,
				duration: key.duration,
				director: key.director,
			};
			movies.value.push(movie);
		}
		if (typeof pgCount != "undefined") {
			pgCount.value = data.pgCount;
		}
	});
}

function GetSourceMoviesByKeyword(
	id: string,
	keyword: string,
	num: number,
	pg: number,
	movies: Ref<Movie[]>,
	pgCount?: Ref<number>
) {
	baseFetch("/user/source/search", {
		method: "POST",
		handle: true,
		body: {
			id: id,
			keyword: keyword,
			num: num,
			pg: pg,
		},
	}).then((data: any) => {
		movies.value = [];
		for (const key of data.movies) {
			let movie: Movie = {
				id: key.id,
				name: key.name,
				description: key.description,
				duration: key.duration,
				director: key.director,
			};
			movies.value.push(movie);
		}
		if (typeof pgCount != "undefined") {
			pgCount.value = data.pgCount;
		}
	});
}

async function GetSources() {
	const data = await baseFetch("/user/source/all", {
		method: "GET",
		handle: true,
		body: {},
	});
	sources.value = [];
	for (const key of data as any) {
		let source: Source = {
			id: key.id,
			name: key.name,
			getting: key.get,
			complete: key.ok,
			url: key.url,
			create: false,
		};
		sources.value.push(source);
		await getSourceDetail(key.id); // 获取每个分类的采集类信息
	}
	menuOptions.value = [];
	menuOptions.value = menuOptions.value.concat(DefaultOptions);
	for (const source of sources.value) {
		menuOptions.value.push(newDetail(source.name, source.id));
	}
}

async function GetCategories() {
	const data = await baseFetch("/user/category/all", {
		method: "GET",
		handle: true,
		body: {},
	});
	categories.value = [];
	if (data) {
		for (const key of data as any) {
			let category: Category = {
				id: key.id,
				name: key.name,
				classNum: key.classNum,
				movieNum: key.movieNum,
				create: false,
			};
			categories.value.push(category);
		}
	}
}

function DelMovie(id: number) {
	return baseFetch("/user/del", {
		method: "POST",
		handle: false,
		body: {
			id: id,
		},
	});
}

function DelCategory(id: number) {
	return baseFetch("/user/category/del", {
		method: "POST",
		handle: false,
		body: {
			id: id,
		},
	});
}

function DelSource(id: number) {
	return baseFetch("/user/source/del", {
		method: "POST",
		handle: false,
		body: {
			id: id,
		},
	});
}

function CreateCategory(name: string) {
	return baseFetch("/user/category/add", {
		method: "POST",
		handle: false,
		body: {
			name: name,
		},
	});
}

function CreateSource(name: string, url: string) {
	return baseFetch("/user/source/add", {
		method: "POST",
		handle: false,
		body: {
			name: name,
			url: url,
		},
	});
}

function HandleGetting(id: number, getting: boolean) {
	let path: string = getting ? "/user/stop/" + id : "/user/start/" + id;
	return baseFetch(path, {
		method: "GET",
		handle: false,
		body: {},
	});
}

function UpdateAccount(account: string) {
	return baseFetch("/user/updateAccount", {
		method: "POST",
		handle: false,
		body: {
			account: account,
		},
	});
}

function UpdatePassword(password: string) {
	return baseFetch("/user/updatePassword", {
		method: "POST",
		handle: false,
		body: {
			password: password,
		},
	});
}

function UpdateSourceName(name: string) {
	// 未写完
	return baseFetch("/user/updateName", {
		method: "POST",
		handle: false,
		body: {
			name: name,
		},
	});
}

async function getSourceDetail(id: number) {
	const data = await baseFetch("/user/source/all_class/" + String(id), {
		method: "GET",
		handle: true,
		body: {},
	});
	sourceDetail.set(id, data as Class[]);
}

export {
	Login,
	LogOut,
	GetMovieNum,
	global,
	GetMovies,
	GetMoviesByKeyword,
	GetSources,
	GetCategories,
	DelMovie,
	DelCategory,
	DelSource,
	CreateCategory,
	CreateSource,
	HandleGetting,
	UpdateAccount,
	UpdatePassword,
	GetSourceMovies,
	GetSourceMoviesByKeyword,
};
