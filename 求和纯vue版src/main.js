/*
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 20:54:04
 * @FilePath: \demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/iconfont.css";

import axios from "axios";
Vue.directive("focus", {
	inserted(el) {
		el.focus();
	},
});
axios.defaults.baseURL = "https://www.escook.cn";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
new Vue({
	render: (h) => h(App),
}).$mount("#app");
