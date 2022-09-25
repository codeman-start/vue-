<!--
 * @Date: 2022-09-24 11:29:47
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 20:41:24
 * @FilePath: \demo\src\components\MyTable.vue
-->
<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->

    <slot name="thead"></slot>

    <!-- 表格主体区域 -->
    <tbody>
      <slot name="tbody" :trr="trr"></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  props: {
    trr: {
      require: true,
      type: Array,
    },
  },
};
</script>

<style scoped lang="less">
.my-goods-list {
  margin-top: 100px;
  .badge {
    margin-right: 5px;
  }
}
</style>