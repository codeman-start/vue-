/*
 * @Date: 2022-09-28 21:42:48
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 23:43:09
 * @FilePath: \wagnyi_project\src\uitls\index.js
 */
import axios from "axios";
// Set config defaults when creating the instance
const request = axios.create({
	baseURL: "http://localhost:3000",
});
// 添加请求拦截器
request.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
request.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		return response.data;
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);
export default request;
