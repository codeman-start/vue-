/*
 * @Date: 2022-09-28 21:33:40
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-28 21:46:05
 * @FilePath: \wagnyi_project\babel.config.js
 */
module.exports = {
	presets: ["@vue/cli-plugin-babel/preset"],
	plugins: [
		[
			"import",
			{
				libraryName: "vant",
				libraryDirectory: "es",
				style: true,
			},
			"vant",
		],
	],
};
