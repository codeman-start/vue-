<!--
 * @Date: 2022-09-25 20:24:38
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 21:26:36
 * @FilePath: \demo\src\App.vue
-->
<template>
  <div>
    <MyHeader title="tabBar"></MyHeader>
    <component :is="comname" class="main"></component>
    <MyTabBar :trr="tabList" @shift="bn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";

import MyTabBar from "@/components/MyTabBar.vue";
import MyGoodsList from "@/veiws/MyGoodsList.vue";
import MyGoodsSearch from "@/veiws/MyGoodsSearch.vue";
import MyUserInfo from "@/veiws/MyUserInfo.vue";
export default {
  data() {
    return {
      comname: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    bn(e) {
      this.comname = e;
    },
  },
  components: {
    MyHeader,

    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
};
</script>

<style>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>