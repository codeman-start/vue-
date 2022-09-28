/*
 * @Date: 2022-09-28 21:33:40
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 21:47:30
 * @FilePath: \wagnyi_project\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import "@/vant";
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
