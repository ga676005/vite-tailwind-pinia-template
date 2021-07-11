<template>
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply min-h-screen bg-gray-200;
}
</style>
