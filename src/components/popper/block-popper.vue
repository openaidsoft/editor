<script setup>
import { ref } from 'vue'

const showPopper = ref(false)

const onKeyupHandler = e => showPopper.value = e.key ==='/' ? true : false
</script>

<template>
<Popper :show="showPopper" placement="bottom-start" style="width: 100%;">
  <slot />
</Popper>
</template>

<style scoped>
.container {
  display: flex;
  /* gap: 5px; */
}
:deep(.popper) {
  background-color: transparent;
}
</style>