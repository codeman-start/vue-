<!--
 * @Date: 2022-09-24 11:29:47
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 10:07:56
 * @FilePath: \demo\src\components\Count.vue
-->
<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <h3>当前求和放大十倍：{{ $store.getters.bigSum }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
      sum: 0, //当前的和
    };
  },
  methods: {
    increment() {
      console.log(this.$store);
      //   this.$store.dispatch("jia", this.n);
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      //   this.$store.dispatch("jian", this.n);
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
      //   if (this.$store.state.sum % 2) {
      //     this.$store.dispatch("jia", this.n);
      //   }
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>

