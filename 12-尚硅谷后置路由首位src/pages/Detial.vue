<!--
 * @Date: 2022-09-26 00:11:41
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-26 23:49:55
 * @FilePath: \demo\src\pages\Detial.vue
-->
<template>
  <ul>
    <!-- <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li> -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  // props: ["a", "b"],
  props: ["id", "title"],
  name: "Detail",
};
</script>
