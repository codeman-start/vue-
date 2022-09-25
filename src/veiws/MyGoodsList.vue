<!--
 * @Date: 2022-09-25 20:24:38
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 21:23:04
 * @FilePath: \demo\src\veiws\MyGoodsList.vue
-->
<template>
  <div>
    <MyTable :grr="list">
      <template slot="thead">
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template slot="tbody" scope="{grr}">
        <td>{{ grr.id }}</td>
        <td>{{ grr.goods_name }}</td>
        <td>{{ grr.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            v-if="grr.inputVisible === true"
            v-model="grr.inputValue"
            @keypress.enter="tn(grr.id, grr.inputValue)"
            @keypress.esc="grr.inputValue = ''"
            v-focus
            @blur="grr.inputVisible = false"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="grr.inputVisible = true"
          >
            +Tag
          </button>
          <br />
          <span v-for="(item, i) in grr.tags" :key="i">{{ item }}</span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(grr.id)">
            删除
          </button>
        </td></template
      ></MyTable
    >
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
export default {
  components: { MyTable },
  data() {
    return {
      list: [], // 所有数据
    };
  },
  async created() {
    const res = await this.$axios({
      url: "/api/goods",
    });
    this.list = res.data.data;
  },
  methods: {
    del(id) {
      const i = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(i, 1);
    },
    tn(id, tag) {
      const i = this.list.findIndex((ele) => ele.id === id);
      this.list[i].tags.unshift(tag);
      this.list[i].inputValue = "";
    },
  },
};
</script>

<style>
</style>