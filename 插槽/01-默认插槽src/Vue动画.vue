<!--
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-22 15:11:36
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
.remove-enter-active {
  animation: remove 3s linear;
}
.remove-leave-active {
  animation: remove 3s linear reverse;
}
@keyframes remove {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>