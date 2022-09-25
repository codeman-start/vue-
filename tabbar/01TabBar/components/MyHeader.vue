<!--
 * @Date: 2022-09-21 18:37:25
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 19:44:08
 * @FilePath: \demo\src\components\MyHeader.vue
-->
<template>
  <div class="my-header" :style="{ color, backgroundColor: background }">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: "#fff",
    },
    background: {
      type: String,
      default: "green",
    },
  },
};
</script>


<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>