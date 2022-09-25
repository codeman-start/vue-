<!--
 * @Date: 2022-09-25 20:24:38
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 21:05:12
 * @FilePath: \demo\src\components\MyTabBar.vue
-->
<template>
  <div class="my-tab-bar">
    <div
      :class="{ current: ix == index }"
      class="tab-item"
      v-for="(ele, index) in trr"
      :key="index"
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
      ix: 0,
    };
  },
  methods: {
    send(index, nn) {
      this.ix = index;
      this.$emit("shift", nn);
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