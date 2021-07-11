<template>
  <div class="h-16 bg-gray-800 mb-10 flex items-center">
    <NavLink
      class="mr-2 text-xl uppercase"
      v-for="link in links"
      :key="link"
      :to="{ name: link }"
    >
      {{ link }}
    </NavLink>
    <NavLink class="text-white" to="https://vueschool.io">vueschool</NavLink>
  </div>
</template>

<script setup>
import NavLink from './NavLink.vue'
const links = ['home', 'about']
</script>

<style lang="scss" scoped></style>
