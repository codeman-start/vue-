/*
 * @Date: 2022-09-28 21:42:06
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 23:09:57
 * @FilePath: \wagnyi_project\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
const router = new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/home",
			component: () => import("@/views/Layout"),
			children: [
				{ path: "home", comment: () => import("@/views/Home") },

				{ path: "search", component: () => import("@/views/Search") },
			],
		},
	],
});
Vue.use(router);
export default router
