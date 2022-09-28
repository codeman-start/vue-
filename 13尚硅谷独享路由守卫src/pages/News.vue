<!--
 * @Date: 2022-09-25 23:56:52
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-27 00:04:43
 * @FilePath: \demo\src\pages\News.vue
-->
<template>
  <ul>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log("news即将销毁");
  },
};
</script>
