<!--
 * @Date: 2022-09-24 18:10:27
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 19:01:05
 * @FilePath: \todo-tpl\src\component\TodoHeader.vue
-->
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="isAll"
      :disabled="!hrr.length"
    />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="txt"
      @keyup.enter="send"
    />
  </header>
</template>

<script>
export default {
  props: ["hrr"],
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    send() {
      this.$emit("shou", this.txt);
      this.txt = "";
    },
  },
  computed: {
    isAll: {
      set(val) {
        this.hrr.forEach((ele) => {
          ele.isDone = val;
        });
      },
      get() {
        return (
          this.hrr.length !== 0 && this.hrr.every((ele) => ele.isDone == true)
        );
      },
    },
  },
};
</script>
