/*
 * @Date: 2022-09-28 21:33:40
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 23:43:34
 * @FilePath: \wagnyi_project\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import "@/vant";
import "@/flexible";
import router from "@/router";
import "@/uitls";
Vue.config.productionTip = false;
Vue.use(router);
new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
