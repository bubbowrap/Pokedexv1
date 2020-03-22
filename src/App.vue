<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="container">
      <div class="row justify-content-center">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
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
  }
};
</script>

<style lang="scss">
  .fade-enter {
    opacity: 0
  }

  .fade-enter-active {
    transition: opacity .1s;
  }

  .fade-leave-active {
    transition: opacity .1s;
    opacity: 0;
  }

</style>
