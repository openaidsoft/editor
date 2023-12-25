<script setup>
import MenuBar from '@/components/MenuBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <menu-bar />
  </header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style scoped>
</style>
