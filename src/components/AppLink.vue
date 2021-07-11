<template>
  <a v-if="isExternalLink" :href="to" rel="noopenter" target="_blank">
    <slot />
  </a>
  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ isActive, href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :class="isActive ? activeClass : inactiveClass"
    >
      <slot />
    </a>
  </router-link>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import { RouterLink, useLink } from 'vue-router'

const props = defineProps({
  ...RouterLink.props,
  inactiveClass: String,
})

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})

if (!isExternalLink) {
  const { navigate, href, route, isActive, isExactActive } = useLink(props)
}
</script>
