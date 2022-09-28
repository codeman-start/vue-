/*
 * @Date: 2022-09-25 23:23:05
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-26 00:00:58
 * @FilePath: \demo\src\router\index.js
 */
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
export default new VueRouter({
	routes: [
		{
			path: "/about",
			component: About,
		},
		{
			path: "/home",
			component: Home,
			children: [
				{
					path: "news",
					component: News,
				},
				{
					path: "message",
					component: Message,
				},
			],
		},
	],
});
