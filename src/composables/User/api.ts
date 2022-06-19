import router from "../../router/router";
import { Ref } from "vue";
import { baseFetch } from "./http";
import { sources, moviesNum, categories, movies, LogInEd, sourceDetail } from "./data";
import { Source, Category, Movie, Class } from "./public";

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
				getting: key.get,
				complete: key.ok,
				url: key.url,
				create: false,
			};
			sources.value.push(source);
			getSourceDetail(key.id); // 获取每个分类的采集类信息
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
		if (data) {
			for (const key of data) {
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

function getSourceDetail(id: number) {
	return baseFetch("/user/source/all_class/" + String(id), {
		method: "GET",
		handle: true,
		body: {},
	}).then((data) => {
		sourceDetail.set(id, data);
	});
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
};
