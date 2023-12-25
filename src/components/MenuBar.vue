<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menus = router.getRoutes().filter(r => r?.meta?.title)
const isActiveMenu = (m) => m.path === route.path
</script>

<template>
<nav class="menu-box">
  <li v-for="m in menus" :key="m.path" class="menu" :class="{ 'menu-active': isActiveMenu(m) }">
    <router-link :to="m.path">{{ m.meta.title }}</router-link>
  </li>
</nav>
</template>

<style scoped>
.menu-box {
  display: flex;
  gap: 20px;
  background-color: antiquewhite;
  list-style:none;
}
.menu > a {
  color: chocolate;
  text-decoration-line: none;
}
.menu::after {
  content: "|";
  float: right;
  display: block;
  color: lightgray;
  margin-left: 20px;
}
.menu:last-child::after{
  content: "";
}
.menu:hover {
  color: brown;
}
.menu-active {
  text-decoration-line: underline;
  text-decoration-color:darkred;
  text-decoration-style : dotted;
}
</style>