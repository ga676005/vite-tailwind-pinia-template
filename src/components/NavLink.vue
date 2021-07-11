<template>
  <AppLink
    v-bind="$attrs"
    class="
      inline-flex
      items-center
      px-1
      pt-1
      border-b-2 border-transparent
      text-sm
      font-medium
      leading-5
      focus:outline-none
      transition
      duration-150
      ease-in-out
      hover:text-gray-200 hover:border-gray-300
    "
    active-class="border-indigo-500 text-gray-100 focus:border-indigo-700"
    inactive-class="text-gray-500 hover:text-gray-100 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"
  >
    <slot />
  </AppLink>
</template>
