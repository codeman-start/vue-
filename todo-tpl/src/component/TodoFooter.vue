<!--
 * @Date: 2022-09-24 18:10:27
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 18:37:08
 * @FilePath: \todo-tpl\src\component\TodoFooter.vue
-->
<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ frr.length }}</strong></span
    >
    <ul class="filters" @click="change">
      <li>
        <a
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          @click="isSel = 'all'"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          @click="isSel = 'no'"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'ok' }"
          href="javascript:;"
          @click="isSel = 'ok'"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["frr"],
  data() {
    return {
      isSel: "all",
    };
  },
  methods: {
    change() {
      this.$emit("ck", this.isSel);
    },
    clear() {
      this.$emit("clean");
    },
  },
};
</script>
