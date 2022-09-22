<!--
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-22 19:30:34
 * @FilePath: \demo\src\App.vue
-->

<template>
  <div>
    <transition-group name=" remove" appear>
      <h1 v-show="!show" key="1">南山南</h1>
      <h1 v-show="show" key="2">北海北</h1>
      <!-- <div v-show="show">
        <h1>南山南</h1>
        <h1>北海北</h1>
      </div> -->
    </transition-group>
    <button @click="show = !show">南山南/北海北</button>
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