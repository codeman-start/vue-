<!--
 * @Date: 2022-09-25 23:17:28
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-27 00:06:51
 * @FilePath: \demo\src\pages\Home.vue
-->
<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
          >
            News
          </router-link>
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
          >
            Message
          </router-link>
        </li>
      </ul>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
  