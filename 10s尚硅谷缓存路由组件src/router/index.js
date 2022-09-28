/*
 * @Date: 2022-09-25 23:23:05
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-26 23:22:24
 * @FilePath: \demo\src\router\index.js
 */
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detial from "../pages/Detial";
export default new VueRouter({
	routes: [
		{ name: "guanyu", path: "/about", component: About },
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
					children: [
						{
							name: "xiangqin",
							path: "detial/:id/:title",
							component: Detial,
							// props；的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Deatil组件
							// props: { a: 1, b: "hello" },
							// props的第二种写法，值为布尔值，若布尔值为真，就会把该路由收到的说是有Params参数，以props的形式传给Detail组件。
							// props: true,
							// props:的第三种写法，值为函数
							// props($route) {
							// 	return { id: $route.query.id, title: $route.query.title };
							// },
							// props($route) {
							// 	return { id: $route.query.id, title: $route.query.title };
							// },
							// props({ query }) {
							// 	return { id: query.id, title: query.title };
							// },
							props({ query: { id, title } }) {
								return { id, title };
							},
						},
					],
				},
			],
		},
	],
});
