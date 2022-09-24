<!--
 * @Date: 2022-09-24 18:10:27
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 19:04:44
 * @FilePath: \todo-tpl\src\App.vue
-->
<template>
  <div class="todoapp">
    <TodoHeader :hrr="getArr" @shou="get"></TodoHeader>
    <TodoMain :mrr="getArr" @remove="dn"></TodoMain>
    <TodoFooter :frr="getArr" @ck="opt" @clean="del"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/component/TodoHeader";
import TodoFooter from "@/component/TodoFooter";
import TodoMain from "@/component/TodoMain";

// 1 样式引入
import "./styles/base.css";
import "./styles/index.css";

export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("arr")) || [],
      state: "all",
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    opt(val) {
      this.state = val;
    },
    get(val) {
      this.list.push({
        id:
          this.list.length !== 0 ? this.list[this.list.length - 1].id + 1 : 100,
        name: val,
        isDone: false,
      });
    },
    dn(id) {
      // const i=this.list.findex(ele=>ele.id==id)
      const i = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(i, 1);
    },
    del() {
      this.list = this.list.filter((ele) => ele.isDone === false);
    },
  },
  computed: {
    getArr() {
      if (this.state === "all") {
        return this.list;
      } else if (this.state === "ok") {
        return this.list.filter((ele) => ele.isDone === true);
      } else {
        return this.list.filter((ele) => ele.isDone === false);
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem("arr", JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style>
</style>
