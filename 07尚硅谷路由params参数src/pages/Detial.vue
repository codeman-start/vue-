<!--
 * @Date: 2022-09-26 00:11:41
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-26 00:41:21
 * @FilePath: \demo\src\pages\Detial.vue
-->
<template>
  <ul>
    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
};
</script>
