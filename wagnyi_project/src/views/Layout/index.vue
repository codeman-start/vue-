<!--
 * @Date: 2022-09-28 21:41:35
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-29 00:03:06
 * @FilePath: \wagnyi_project\src\views\Layout\index.vue
-->
<template>
  <div>
    <van-nav-bar :title="$route.meta.title" fixed placeholder />
    <router-view></router-view>
    <van-tabbar route placeholder>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search"
        >搜索页</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>