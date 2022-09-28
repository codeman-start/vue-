<!--
 * @Date: 2022-09-25 23:54:35
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-27 00:06:15
 * @FilePath: \demo\src\pages\Message.vue
-->
<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detial/${m.id}/${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp; -->
        <!-- 跳转路由并携带参数params，to的对象写法 不允许path，只能写name -->
        <!-- <router-link
          :to="{
            name: 'xiangqin',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp; -->
        <router-link
          :to="{
            name: 'xiangqin',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    pushShow(m) {
      this.$router.push(
        {
          name: "xiangqin",
          query: {
            id: m.id,
            title: m.title,
          },
        },
        () => {}
      );
    },
    replaceShow(m) {
      this.$router.replace(
        {
          name: "xiangqin",
          query: {
            id: m.id,
            title: m.title,
          },
        },
        () => {}
      );
    },
  },
  beforeDestroy() {
    console.log("news即将销毁");
  },
};
</script>
