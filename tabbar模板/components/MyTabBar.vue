<template>
  <div class="my-tab-bar">
    <div class="tab-item">
      <!-- 图标 -->
      <span class="iconfont icon-shangpinliebiao"></span>
      <!-- 文字 -->
      <span>商品列表</span>
    </div>
    <div class="tab-item">
      <!-- 图标 -->
      <span class="iconfont icon-sousuo"></span>
      <!-- 文字 -->
      <span>商品搜索</span>
    </div>
    <div class="tab-item">
      <!-- 图标 -->
      <span class="iconfont icon-user"></span>
      <!-- 文字 -->
      <span>我的信息</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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