import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "front",
		component: () => import("../components/Front.vue"),
		children: [
			{
				path: "",
				name: "home",
				component: () => import("../components/Front/Home.vue"),
			},
			{
				path: "search/:keyword",
				name: "search",
				component: () => import("../components/Front/Search.vue"),
			},
			{
				path: "play/:id",
				name: "play",
				component: () => import("../components/Front/Play.vue"),
			},
		],
	},
	{
		path: "/user",
		name: "user",
		component: () => import("../components/User.vue"),
		children: [
			{
				path: "panel",
				name: "panel",
				component: () => import("../components/User/panel/PanelHome/PanelHome.vue"),
			},
			{
				path: "source",
				name: "source",
				component: () => import("../components/User/panel/PanelSource/PanelSource.vue"),
			},
			{
				path: "category",
				name: "category",
				component: () => import("../components/User/panel/PanelCategory/PanelCategory.vue"),
			},
			{
				path: "movies",
				name: "movies",
				component: () => import("../components/User/panel/PanelMovies/PanelMovies.vue"),
			},
			{
				path: "class",
				name: "class",
				component: () => import("../components/User/panel/PanelClass/PanelClass.vue"),
			},
			{
				path: "setting",
				name: "setting",
				component: () => import("../components/User/Setting/Setting.vue"),
			},
			{
				path: "source/:id/movies",
				name: "source-detail-movie",
				component: () =>
					import("../components/User/panel/PanelSourceMovie/PanelSourceMovie.vue"),
			},
			{
				path: "source/:id/class",
				name: "source-detail-class",
				component: () =>
					import("../components/User/panel/PanelSourceClass/PanelSourceClass.vue"),
			},
		],
	},
	{
		path: "/user/login",
		name: "login",
		component: () => import("../components/Login.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
