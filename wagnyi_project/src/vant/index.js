/*
 * @Date: 2022-09-28 21:46:48
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-29 19:38:20
 * @FilePath: \wagnyi_project\src\vant\index.js
 */
import Vue from "vue";
import { NavBar, Tabbar, TabbarItem, Col, Row, Image as VanImage, Lazyload, Cell, Icon, Search } from "vant";
Vue.use(NavBar).use(Tabbar).use(TabbarItem).use(Col).use(Row).use(VanImage).use(Lazyload).use(Cell).use(Icon).use(Search);
import { List } from "vant";

Vue.use(List);
