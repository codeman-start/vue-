<!--
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-22 20:56:08
 * @FilePath: \demo\src\App.vue
-->

<template>
  <div></div>
</template>

<script>
import "animate.css";
export default {
  created() {
    this.$http({
      url: " https://www.escook.cn/api/cart  ",
    }).then((res) => {
      console.log(res.data);
    });
  },
};
</script>

<style>
h1 {
  height: 100px;
  background-color: skyblue;
}
</style>