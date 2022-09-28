/*
 * @Date: 2022-09-28 21:51:30
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 21:51:46
 * @FilePath: \wagnyi_project\postcss.config.js
 */
module.exports = {
	plugins: {
		// postcss-pxtorem 插件的版本需要 >= 5.0.0
		"postcss-pxtorem": {
			rootValue({ file }) {
				return file.indexOf("vant") !== -1 ? 37.5 : 75;
			},
			propList: ["*"],
		},
	},
};
