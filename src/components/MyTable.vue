<!--
 * @Date: 2022-09-25 08:43:44
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 09:44:43
 * @FilePath: \demo\src\components\MyTable.vue
-->
<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <slot name="thead"></slot>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <slot name="tbody" :grr="grr"></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTable",
  data() {
    return {};
  },
  props: {
    grr: {
      type: Array,
      require: true,
    },
  },
  methods: {
    del(id) {
      this.$emit("del", id);
    },
  },
};
</script>


<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>