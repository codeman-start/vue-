<template>
  <div>
    <MyHeader title="购物车"></MyHeader>
    <MyTable></MyTable>
    <MyTabBar></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyTable from "@/components/MyTable.vue";
import MyTabBar from "@/components/MyTabBar.vue";
export default {
  components: {
    MyHeader,
    MyTable,
    MyTabBar,
  },
};
</script>

<style>
</style>