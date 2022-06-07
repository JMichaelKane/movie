import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "front",
		component: () => import("../components/Front.vue"),
		children: [
			{
				path: "/",
				name: "home",
				component: () => import("../components/Front/Home.vue"),
			},
			{
				path: "/search/:keyword",
				name: "search",
				component: () => import("../components/Front/Search.vue"),
			},
			{
				path: "/play/:id",
				name: "play",
				component: () => import("../components/Front/Play.vue"),
			},
		],
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
