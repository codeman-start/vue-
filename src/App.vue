<!--
 * @Date: 2022-09-20 18:14:17
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-24 09:47:57
 * @FilePath: \demo\src\App.vue
-->
<template>
  <div class="container">
    <Category title="游戏">
      <template scope="jojo">
        <ul>
          <li v-for="(g, index) in jojo.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="jojo">
        <ol>
          <li v-for="(g, index) in jojo.games" :key="index">{{ g }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="jojo">
        <h4 v-for="(g, index) in jojo.games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>
