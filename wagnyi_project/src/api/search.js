/*
 * @Date: 2022-09-28 21:43:29
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-29 00:26:50
 * @FilePath: \wagnyi_project\src\api\search.js
 */
import request from "@/uitls";
export const hotKey = (params) =>
	request({
		url: "/search/hot",
		params,
	});
export const outCome = (params) =>
	request({
		url: "/cloudsearch",
		params,
	});
