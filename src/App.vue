<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="container">
      <div class="row justify-content-center">
          <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>

import NavHeader from './components/layout/Header.vue';

export default {
  name: "App",
  components: {
    NavHeader
  },
};
</script>

<style lang="scss">

</style>
