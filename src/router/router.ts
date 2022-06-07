import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: () => import("../components/Home.vue"),
	},
	{
		path: "/search/:keyword",
		name: "search",
		component: () => import("../components/Search.vue"),
	},
	{
		path: "/play/:id",
		name: "play",
		component: () => import("../components/Play.vue"),
	},
	{
		path: "/user",
		name: "user",
		component: () => import("../components/User.vue"),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
