<!--
 * @Date: 2022-09-28 21:40:02
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-29 00:01:21
 * @FilePath: \wagnyi_project\src\views\Home\index.vue
-->
<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row gutter="6">
      <van-col span="8" v-for="item in recMusic" :key="item.id"
        ><van-image
          width="100%"
          height="3rem"
          fit="cover"
          lazy-load
          :src="item.picUrl"
        />
        <p class="song_name">{{ item.name }}</p></van-col
      >
    </van-row>
    <p class="title">最新音乐</p>
    <van-cell
      center
      :title="item.name"
      :label="item.song.artists[0].name + ' - ' + item.name"
      v-for="item in newSongs"
      :key="item.id"
    >
      <template #right-icon>
        <van-icon name="play-circle-o" size=".6rem" /> </template
    ></van-cell>
  </div>
</template>

<script>
import { recommendMusic, newMusic } from "@/api/home";
export default {
  data() {
    return {
      recMusic: [],
      newSongs: [],
    };
  },
  created() {
    this.getRemmendMusic();
    this.getSongs();
  },
  methods: {
    async getRemmendMusic() {
      const res = await recommendMusic({ limit: 6 });

      this.recMusic = res.result;
    },
    async getSongs() {
      const res = await newMusic({ limit: 6 });
      console.log(res);
      this.newSongs = res.result;
    },
  },
};
</script>

<style>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /*	* 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>