<template>
  <nav class="navbar navbark-dark bg-danger justify-content-center">
      <router-link to="/" class="navbar-brand"><img src="../../assets/pokedex-logo.png" /></router-link>
  </nav>
</template>

<style lang="scss">
  .navbar-brand {
    max-width: 10rem;
    transition: transform .15s ease 0s;
    
      &:hover {
        transform: scale(1.05);
      }
  }
</style>