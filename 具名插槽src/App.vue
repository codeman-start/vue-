<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.atguigu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, i) in games" :key="i">{{ g }}</li>
      </ul>
      <a slot="footer" href="javascript:;">更多内容</a>
    </Category>

    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div>
          <a href="javascript:;">日韩</a>
          <a href="javascript:;">日韩</a>
          <a href="javascript:;">日韩</a>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      games: ["植物大战僵尸", "红色警戒", "空洞骑士", "王国"],
    };
  },
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
