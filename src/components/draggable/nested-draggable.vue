<script setup>
import draggable from 'vuedraggable'

const { tasks } = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <draggable
    class="drag-area"
    tag="ul"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
    <template #item="{ element }">
      <li>
        <p>{{ element.name }}</p>
        <NestedDraggable :tasks="element.tasks" />
      </li>
    </template>
  </draggable>
</template>

<style scoped>
.drag-area {
  min-height: 50px;
  outline: 1px dashed;
}
</style>