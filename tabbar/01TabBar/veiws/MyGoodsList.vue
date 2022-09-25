<template>
  <div>
    <MyTable :trr="list">
      <template slot="thead">
        <thead>
          <tr>
            <th>#</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>标签</th>
            <th>操作</th>
          </tr>
        </thead>
      </template>
      <template slot="tbody" scope="{ trr }">
        <tr v-for="(ele, index) of trr" :key="ele.id">
          <td>{{ index + 1 }}</td>
          <td>{{ ele.goods_name }}</td>
          <td>{{ ele.goods_price }}</td>
          <td>
            <input
              type="text"
              class="tag-input form-control"
              style="width: 100px"
              v-if="ele.inputVisible"
              v-focus
              @blur="ele.inputVisible = false"
              @keyup.enter="send(ele.id)"
              v-model="tag"
              @keyup.esc="tag = ''"
            />
            <button
              class="btn btn-primary btn-sm add-tag"
              style="display: block"
              @click="ele.inputVisible = true"
            >
              +Tag
            </button>
            <br />
            <span v-for="(item, index) of ele.tags" :key="index">{{
              item
            }}</span>
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
  data() {
    return {
      tag: "",
      list: [], // 所有数据
    };
  },
  components: { MyTable },
  methods: {
    del(id) {
      const i = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(i, 1);
    },
    send(id) {
      const i = this.list.findIndex((ele) => ele.id === id);
      this.list[i].tags.unshift(this.tag);
      this.tag = "";
    },
  },
  async created() {
    const res = await this.$axios({
      url: "/api/goods",
    });
    // console.log(res.data.data);
    this.list = res.data.data;
  },
};
</script>

<style>
</style>