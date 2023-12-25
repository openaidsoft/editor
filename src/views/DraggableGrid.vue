<script setup>
import { ref } from 'vue'
import GridDraggable from "@/components/draggable/grid-draggable.vue"
import CommonDraggable from "@/components/draggable/common-draggable.vue"
import NestedDraggable from "@/components/draggable/nested-draggable.vue"
import RawDisplayer from '@/components/draggable/raw-displayer.vue'

const list1 = ref([
  {
    name: "task 1",
    tasks: []
  },
  {
    name: "task 2",
    tasks: []
  },
  {
    name: "task 3",
    tasks: []
  },
  {
    name: "task 4",
    tasks: []
  },
  {
    name: "task 5",
    tasks: []
  },
])
const list2 = ref([
  {
    name: "task 1",
    tasks: []
  },
  {
    name: "task 2",
    tasks: []
  },
  {
    name: "task 3",
    tasks: []
  },
  {
    name: "task 4",
    tasks: []
  },
  {
    name: "task 5",
    tasks: []
  },
])
const list3 = ref([
  {
    name: "task 1",
    tasks: []
  },
  {
    name: "task 2",
    tasks: []
  },
  {
    name: "task 3",
    tasks: []
  },
  {
    name: "task 4",
    tasks: []
  },
  {
    name: "task 5",
    tasks: []
  },
])
</script>

<template>
  <div>
    <div>
      <h3>Grid draggable</h3>
      <NestedDraggable :tasks="list1" />
      <CommonDraggable :tasks="list2" />
      <GridDraggable :tasks="list3" />
    </div>

    <RawDisplayer :list="list1" title="List" />
    <RawDisplayer :list="list2" title="List" />
    <RawDisplayer :list="list3" title="List" />
  </div>
</template>

<style scoped></style>