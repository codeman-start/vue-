<!--
 * @Date: 2022-09-25 23:38:05
 * @LastEditors: 冯文魁
 * @LastEditTime: 2022-09-26 23:56:48
 * @FilePath: \demo\src\components\Banner.vue
-->
<template>
  <div>
    <div class="col-xs-offset-2 col-xs-8">
      <div class="page-header"><h2>Vue Router Demo</h2></div>
    </div>
    <button @click="$router.back()">后退</button>
    <button @click="$router.forward()">前进</button>
    <button @click="$router.go(-2)">此时一下go</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>