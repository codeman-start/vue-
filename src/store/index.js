/*
 * @Date: 2022-09-24 23:20:43
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 23:46:13
 * @FilePath: \demo\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
//该文件用于创建vuex中最为核心的store
Vue.use(Vuex);
const actions = {};
const mutations = {};
const state = {};
export default new Vuex.Store({ actions, mutations, state });
// 暴露store
// export default store;
