<template>
  <div>
    <MyHeader title="TabBar"> </MyHeader>

    <div class="main">
      <component :is="comName"></component>
    </div>

    <MyTabBar :tabData="tabList" @shift="bn"></MyTabBar>
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
  components: {
    MyHeader,
    MyTabBar,
    MyUserInfo,
    MyGoodsSearch,
    MyGoodsList,
  },
  methods: {
    bn(ming) {
      this.comName = ming;
    },
  },
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
};
</script>

<style>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>