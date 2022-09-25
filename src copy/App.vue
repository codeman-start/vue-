<!--
 * @Date: 2022-09-25 09:59:18
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-25 19:23:47
 * @FilePath: \demo\src\App.vue
-->
<template>
  <div>
    <div class="footer_wrap">
      <span @click="bn1('/find', 'Find')">发现音乐</span>
      <span @click="bn1('/my', 'My')">我的音乐</span>
      <!-- <span @click="bn('/part?name=张三', 'Part')">朋友</span> -->
      <span @click="bn1">校址</span>
      <!-- <span @click="bn2">404</span> -->
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    bn1() {
      this.$router.push({
        name: "Part",
        params: {
          username: "大黄",
        },
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active {
  color: white;
  background: black;
}
</style>