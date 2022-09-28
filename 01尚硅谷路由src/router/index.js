/*
 * @Date: 2022-09-25 23:23:05
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 23:26:47
 * @FilePath: \demo\src\router\index.js
 */
import VueRouter from "vue-router";
import About from "../components/About";
import Home from "../components/Home";
export default new VueRouter({
	routes: [
		{
			path: "/about",
			component: About,
		},
		{
			path: "/home",
			component: Home,
		},
	],
});
