/*
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 11:11:09
 * @FilePath: \demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import Find from "@/views/Find.vue";
import My from "@/views/My.vue";
import Part from "@/views/Part.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 规则
const routes = [
	{
		path: "/find",
		component: Find,
	},
	{
		path: "/my",
		component: My,
	},
	{
		path: "/part",
		component: Part,
	},
];
const router = new VueRouter({ routes });
Vue.config.productionTip = false;
const vm = new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
console.log(vm);
