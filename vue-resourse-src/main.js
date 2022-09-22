import Vue from "vue";
import App from "./App.vue";
import vueResourse from "vue-resourse";
Vue.config.productionTip = false;
Vue.use(vueResourse);
new Vue({
	render: (h) => h(App),
}).$mount("#app");
