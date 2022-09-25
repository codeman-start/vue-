/*
 * @Date: 2022-09-24 23:20:43
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 00:23:22
 * @FilePath: \demo\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
//该文件用于创建vuex中最为核心的store
Vue.use(Vuex);
const actions = {
	jia(context, value) {
		// console.log("actions中的jia被调用了", context, a);
		context.commit("JIA", value);
	},
	jian(context, value) {
		// console.log("actions中的jia被调用了", context, a);
		context.commit("JIAN", value);
	},
	jiaOdd(context, value) {
		// console.log("actions中的jia被调用了", context, a);
		if (context.state.sum % 2) {
			context.commit("JIA", value);
		}
	},
	jiaWait(context, value) {
		// console.log("actions中的jia被调用了", context, a);
		setTimeout(() => {
			context.commit("JIA", value);
		}, 500);
	},
};
const mutations = {
	JIA(state, value) {
		// console.log("actions中的jia被调用了", a, b);
		state.sum += value;
	},
	JIAN(state, value) {
		// console.log("actions中的jia被调用了", a, b);
		state.sum -= value;
	},
};
const state = {
	sum: 0,
};
export default new Vuex.Store({ actions, mutations, state });
// 暴露store
// export default store;
