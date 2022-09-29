<!--
 * @Date: 2022-09-29 20:21:07
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-29 20:24:35
 * @FilePath: \wagnyi_project\src\components\Song.vue
-->
<template>
  <div>
    <van-cell center :title="title" :label="label">
      <template #right-icon>
        <van-icon name="play-circle-o" size=".6rem" /> </template
    ></van-cell>
  </div>
</template>

<script>
export default {
  props: ["title", "label"],
};
</script>

<style>
</style>