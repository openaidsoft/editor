<script setup>
import IconPlus from './icon-plus.vue'
import IconDotsHandle from './icon-dots-handle.vue'
</script>

<template>
<Popper :hover="true" offsetDistance="2" placement="left" style="width: 100%;">
  <slot />
  <template #content>
    <div class="container">
      <IconPlus color="gray" class="icon" />
      <IconDotsHandle color="gray" class="icon" />
    </div>
  </template>
</Popper>
</template>

<style scoped>
.container {
  display: flex;
  /* gap: 5px; */
}
.icon {
  padding: 0.4em;
  height: 0.8em;
  width: 0.8em;
  
}
.icon:hover {
  background-color: lightgray;
  border-radius: 0.2em;
  cursor: pointer;
}
:deep(.popper) {
  background-color: transparent;
}
</style>