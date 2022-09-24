<!--
 * @Date: 2022-09-24 18:10:27
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 19:02:07
 * @FilePath: \todo-tpl\src\component\TodoMain.vue
-->
<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: ele.isDone }" v-for="ele in mrr" :key="ele.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="ele.isDone" />
        <label>{{ ele.name }}</label>
        <button class="destroy" @click="del(ele.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["mrr"],
  methods: {
    del(e) {
      this.$emit("remove", e);
    },
  },
};
</script>
