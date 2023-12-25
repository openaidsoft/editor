<script setup>
import { ref } from 'vue'
import NestedDraggable from "@/components/draggable/nested-draggable.vue"
import RawDisplayer from '@/components/draggable/raw-displayer.vue'

const list = ref([
  {
    name: "task 1",
    tasks: [
      {
        name: "task 2",
        tasks: []
      }
    ]
  },
  {
    name: "task 3",
    tasks: [
      {
        name: "task 4",
        tasks: []
      }
    ]
  },
  {
    name: "task 5",
    tasks: []
  }
])
</script>

<template>
  <div>
    <div>
      <h3>Nested draggable</h3>
      <NestedDraggable :tasks="list" />
    </div>

    <RawDisplayer :list="list" title="List" />
  </div>
</template>

<style scoped></style>