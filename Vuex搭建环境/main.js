/*
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 23:45:36
 * @FilePath: \demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";

import store from "@/store/index";
Vue.config.productionTip = false;
const vm = new Vue({
	store,
	render: (h) => h(App),
}).$mount("#app");
console.log(vm);
