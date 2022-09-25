<!--
 * @Date: 2022-09-24 11:19:11
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 19:28:59
 * @FilePath: \demo\src\components\MyTabBar.vue
-->
<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(ele, index) in tabData"
      :key="index"
      :class="{ current: ix === index }"
      @click="getIdx(index, ele.componentName)"
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
    tabData: {
      type: Array,
      required: true,
      validator(val) {
        console.log(val);
        if (val.length > 2 && val.length < 5) {
          return true;
        } else {
          throw Error("tab标签必须在2~5之间");
        }
      },
    },
  },
  data() {
    return {
      ix: 0,
    };
  },
  methods: {
    getIdx(i, bar) {
      this.ix = i;
      this.$emit("shift", bar);
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