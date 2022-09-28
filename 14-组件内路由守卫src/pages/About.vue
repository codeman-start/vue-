<!--
 * @Date: 2022-09-25 23:17:36
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-27 01:14:04
 * @FilePath: \demo\src\pages\About.vue
-->

<template>
  <h2>我是About组件的内容</h2>
</template>

<script>
export default {
  name: "About",
  beforeDestroy() {
    console.log("About组件被销毁了");
  },
  mounted() {
    console.log("About组件被挂在了");
  },
  // 通过路由规则，进入组件时调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("ming") === "anhui") {
        next();
      } else {
        alert("学校名不对,无权限查看");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("fsaasf", to, from);
  },
};
</script>
