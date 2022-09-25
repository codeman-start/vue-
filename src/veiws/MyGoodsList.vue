<template>
  <div>
    <MyTable :grr="list" @del="bn">
      <template slot="thead">
        <tr>
          <th>#</th>
          <th>商品名称</th>
          <th>价格</th>
          <th>标签</th>
          <th>操作</th>
        </tr></template
      >
      <template slot="tbody" scope="{grr}">
        <tr v-for="(ele, index) of grr" :key="ele.id">
          <td>{{ index + 1 }}</td>
          <td>{{ ele.goods_name }}</td>
          <td>{{ ele.goods_price }}</td>
          <td>
            <input
              type="text"
              class="tag-input form-control"
              v-if="ele.inputVisible"
              v-focus
              @keyup.enter="up(ele.tags)"
              @keyup.esc="txt = ''"
              v-model="txt"
            />
            <button
              class="btn btn-primary btn-sm add-tag"
              v-else
              @click="ele.inputVisible = true"
            >
              +Tag
            </button>
            <br />
            <span
              v-for="(item, index) of ele.tags"
              :key="index"
              class="badge-warning"
              >{{ item }}</span
            >
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="del(ele.id)">
              删除
            </button>
          </td>
        </tr>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
export default {
  components: { MyTable },
  data() {
    return {
      list: [],
      txt: "", // 所有数据
    };
  },
  async created() {
    const res = await this.$axios({
      url: "/api/goods",
    });
    this.list = res.data.data;
  },
  methods: {
    bn(id) {
      const i = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(i, 1);
    },
    up(ele) {
      ele.unshift(this.txt);
      this.txt = "";
    },
  },
};
</script>

<style>
</style>