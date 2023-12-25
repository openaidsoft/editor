<script setup>
import { computed } from 'vue'

const { title, list } = defineProps({
  title: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    required: true,
  },
})

const listString = computed(() => JSON.stringify(list, null, 2))
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <pre>{{ listString }}</pre>
  </div>
</template>

<style scoped>
pre {
  text-align: start;
}
</style>