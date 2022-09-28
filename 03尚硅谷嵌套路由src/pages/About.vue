<!--
 * @Date: 2022-09-25 23:17:36
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 23:53:19
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
};
</script>
