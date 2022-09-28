<!--
 * @Date: 2022-09-28 21:40:40
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-29 00:19:56
 * @FilePath: \wagnyi_project\src\views\Search\index.vue
-->
<template>
  <div>
    <van-search
      v-model="KeyWord"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <div class="search_wrap hot_title">
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
  </div>
</template>

<script>
import { hotKey } from "@/api/search";
export default {
  data() {
    return {
      KeyWord: "",
      HotkeyWord: [],
    };
  },
  created() {
    this.getHotkey();
  },
  methods: {
    async getHotkey() {
      const res = await hotKey();
      this.HotkeyWord = res.result.hots;
      console.log(this.HotkeyWord);
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