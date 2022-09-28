/*
 * @Date: 2022-09-28 21:43:15
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 23:54:55
 * @FilePath: \wagnyi_project\src\api\home.js
 */

import request from "@/uitls";
export const recommendMusic = (params) =>
	request({
		url: "/personalized",
		params,
	});
export const newMusic = (params) =>
	request({
		url: "/personalized/newsong",
		params,
	});
