<!--
 * @Date: 2022-09-25 08:43:44
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 09:24:31
 * @FilePath: \demo\src\App.vue
-->
<template>
  <div>
    <MyHeader title="TabBar"></MyHeader>
    <div class="main">
      <component :is="comName"></component>
    </div>

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
  name: "App",
  data() {
    return {
      comName: "MyGoodsList",
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

  components: {
    MyHeader,
    MyGoodsList,
    MyGoodsSearch,
    MyTabBar,
    MyUserInfo,
  },
  methods: {
    bn(ming) {
      this.comName = ming;
    },
  },
};
</script>

<style>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>