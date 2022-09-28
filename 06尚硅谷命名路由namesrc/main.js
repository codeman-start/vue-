/*
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 23:32:16
 * @FilePath: \demo\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import VueRouter from "vue-router";
import router from "./router";
Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
