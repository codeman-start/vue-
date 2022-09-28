/*
 * @Date: 2022-09-28 21:33:40
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 21:55:23
 * @FilePath: \wagnyi_project\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import "@/vant";
import "@/flexible";
import router from "@/router";
Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
