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
    tag="div"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
    <template #item="{ element }">
      <div>
        <p>{{ element.name }}</p>
        <ColumnDraggable :tasks="element.tasks" />
      </div>
    </template>
  </draggable>
</template>

<style scoped>
.drag-area {
  display: flex;
  flex-direction: row;
  min-height: 50px;
  outline: 1px dashed;
}
.drag-area > div {
  flex: 1;
}
</style>