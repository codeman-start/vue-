<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <slot name="thead"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="(ele, index) in grr" :key="index">
        <slot name="tbody" :grr="ele"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["grr"],
  name: "MyTable",
};
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>