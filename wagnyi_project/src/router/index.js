/*
 * @Date: 2022-09-28 21:42:06
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 23:32:14
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
				{ path: "home", component: () => import("@/views/Home"), meta: { title: "首页" } },

				{ path: "search", component: () => import("@/views/Search"), meta: { title: "搜索页" } },
			],
		},
	],
});
Vue.use(VueRouter);
export default router;
