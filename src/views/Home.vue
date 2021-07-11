<template>
  <div class="text-gray-800">
    <h1 class="text-5xl text-center">Home!!</h1>
    <div class="mt-10">
      <div class="block">
        <p>count (component): {{ state }}</p>
        <p>double count (component): {{ doubleCount }}</p>
      </div>
      <div class="block">
        <p>count (store): {{ main.counter }}</p>
        <p>double count (store): {{ main.doubleCount }}</p>
      </div>
      <div class="block">
        <button class="btn" @click="main.add">Increment</button>
        <button class="btn" @click="main.reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useCountStore } from '../stores/count'

export default {
  setup() {
    const main = useCountStore()

    return {
      // gives access to the whole store
      main,
      // gives access only to specific state
      state: computed(() => main.counter),
      // gives access to specific getter; like `computed` properties
      doubleCount: computed(() => main.doubleCount),
    }
  },
}
</script>

<style lang="scss" scoped>
.block {
  @apply flex 
  justify-around 
  w-1/3
  mx-auto
  bg-gray-300
  mt-3
  h-8
  items-center;
}
.btn {
  @apply text-xl    
  border-2   
  px-3    
  hover:border-gray-900
  uppercase 
  tracking-wider;
}
</style>
