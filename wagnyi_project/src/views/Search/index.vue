<!--
 * @Date: 2022-09-28 21:40:40
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-30 00:06:33
 * @FilePath: \wagnyi_project\src\views\Search\index.vue
-->
<template>
  <div>
    <van-search
      v-model.trim="KeyWord"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <div class="search_wrap hot_title" v-if="!songs.length">
      热门搜索
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="item in HotkeyWord"
          :key="item.first"
          @click="KeyWord = item.first"
          >{{ item.first }}</span
        >
      </div>
    </div>
    <div class="search_wrap hot_title" v-else>
      最佳匹配

      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Song
          :title="item.name"
          :label="item.ar[0].name + ' - ' + item.name"
          v-for="item in songs"
          :key="item.id"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import { hotKey, outCome } from "@/api/search";
import { debounce } from "lodash";
import Song from "@/components/Song.vue";
export default {
  components: { Song },
  data() {
    return {
      KeyWord: "",
      HotkeyWord: [],
      songs: [],
      loading: false,
      finished: false,
      offset: 0,
      limit: 20,
    };
  },
  created() {
    this.getHotkey();
  },
  methods: {
    async onLoad() {
      this.offset += this.limit;
      const res = await outCome({
        keywords: this.KeyWord,
        offset: this.offset,
        limit: this.limit,
      });

      this.loading = false;

      if (this.songs.length == 0) return (this.finished = true);
      if (this.songs.length < this.limit) this.finished = true;

      this.songs = [...this.songs, ...res.result.songs];
    },
    async getHotkey() {
      const res = await hotKey();
      this.HotkeyWord = res.result.hots;
    },
  },
  watch: {
    KeyWord: {
      handler: debounce(async function (val) {
        this.offset = 0;
        this.finished = false;
        if (val) {
          const res = await outCome({
            keywords: val,
            offset: this.offset,
            limit: this.limit,
          });
          this.songs = res.result.songs;
        } else {
          this.songs = [];
        }
      }, 500),
    },
  },
};
</script>

<style>
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>