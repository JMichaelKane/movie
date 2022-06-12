import router from "../../router/router";
import { Ref } from "vue";
import { baseFetch } from "./http";
import { sources, moviesNum, categories, movies } from "./data";
import { Source, Category, Movie } from "./public";

function global() {
	GetMovieNum().then(() => {
		GetSources();
		GetCategories();
		GetMovies_panel();
	});
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
		router.push({ name: "panel" });
	});
}

function GetMovieNum() {
	return baseFetch("/user/count", {
		method: "GET",
		handle: false,
		body: {},
	}).then((data: any) => {
		moviesNum.value = Number(data);
	});
}

function GetMovies_panel() {
	return GetMovies(20, 1, movies);
}

function GetMovies(num: number, pg: number, movies: Ref<Movie[]>, pgCount?: Ref<number>) {
	return baseFetch("/user/list", {
		method: "POST",
		handle: true,
		body: {
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
		// console.log(typeof pgCount);
		if (typeof pgCount != "undefined") {
			pgCount.value = data.pgCount;
		}
	});
}

function GetMoviesByKeyword(keyword: string, num: number, pg: number, movies: Ref<Movie[]>) {
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
	});
}

function GetSources() {
	return baseFetch("/user/source/all", {
		method: "GET",
		handle: true,
		body: {},
	}).then((data: any) => {
		sources.value = [];
		for (const key of data) {
			let source: Source = {
				id: key.id,
				name: key.name,
				complete: key.ok,
				url: key.url,
			};
			sources.value.push(source);
		}
		// console.log(data);
	});
}

function GetCategories() {
	return baseFetch("/user/category/all", {
		method: "GET",
		handle: true,
		body: {},
	}).then((data: any) => {
		categories.value = [];
		for (const key of data) {
			let category: Category = {
				id: key.id,
				name: key.name,
				classNum: key.classNum,
				movieNum: key.movieNum,
			};
			categories.value.push(category);
		}
		// console.log(data);
	});
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

export {
	Login,
	GetMovieNum,
	global,
	GetMovies,
	GetMoviesByKeyword,
	GetSources,
	GetCategories,
	DelMovie,
	DelCategory,
	DelSource,
};
