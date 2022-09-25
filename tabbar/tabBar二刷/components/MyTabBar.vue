<!--
 * @Date: 2022-09-25 08:43:44
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 08:58:55
 * @FilePath: \demo\src\components\MyTabBar.vue
-->
<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(ele, index) in trr"
      :key="index"
      :class="{ current: opt == index }"
      @click="send(index, ele.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="ele.iconText"></span>
      <!-- 文字 -->
      <span>{{ ele.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trr: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      opt: 0,
    };
  },
  methods: {
    send(i, ming) {
      (this.opt = i), this.$emit("shift", ming);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.current {
  color: #1d7bff;
}
</style>