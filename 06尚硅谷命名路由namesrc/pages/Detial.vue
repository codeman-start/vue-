<!--
 * @Date: 2022-09-26 00:11:41
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-26 00:12:12
 * @FilePath: \demo\src\pages\Detial.vue
-->
<template>
  <ul>
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
};
</script>
