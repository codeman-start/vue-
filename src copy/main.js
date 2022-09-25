/*
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 19:15:02
 * @FilePath: \demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import Find from "@/views/Find.vue";
import My from "@/views/My.vue";
import Part from "@/views/Part.vue";
import NotFound from "@/views/NotFound.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 规则
const routes = [
	{
		path: "/find",
		name: " Find",
		component: Find,
	},
	{
		path: "/",
		redirect: "/find",
	},
	{
		path: "/my",
		name: " My",
		component: My,
	},
	{
		path: "/part",
		name: "Part",
		component: Part,
	},
	{
		path: "/part/:username",

		component: Part,
	},
	{
		path: "*",
		name: "NotFound",

		component: NotFound,
	},
];
const router = new VueRouter({ routes });
Vue.config.productionTip = false;
const vm = new Vue({
	router,
	mode: "history",
	render: (h) => h(App),
}).$mount("#app");
console.log(vm);
