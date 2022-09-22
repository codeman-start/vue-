<!--
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-22 15:51:38
 * @FilePath: \demo\src\App.vue
-->

<template>
  <div>
    <transition name=" remove" appear>
      <h1 v-show="show">俺来也</h1>
    </transition>
    <button @click="show = !show">显示、隐藏</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
h1 {
  height: 100px;
  background-color: skyblue;
}
.remove-enter,
.remove-leave-to {
  transform: translateX(-100%);
}
.remove-enter-to,
.remove-leave {
  transform: translateX(0px);
}
.remove-enter-active,
.remove-leave-active {
  transition: 0.5s linear;
}
</style>