<script setup>
import { ref, onMounted, provide } from 'vue'
import { onClickOutside } from '@vueuse/core'
import IconPlus from '@/components/popper/icon-plus.vue'
import IconDotsHandle from '@/components/popper/icon-dots-handle.vue'
import SlashMenu from '../SlashMenu.vue'

const { 
  block, 
  modelValue, 
} = defineProps([
  'block',
  'modelValue',
])
const emit = defineEmits([
  'add-block', 
  'update:modelValue',
])


const showMenu = ref(false)
const menuRef = ref(null)
const inputRef = ref(null)

const moveCursorToEnd = (contentEditableElement) => {
  let range = document.createRange()
  range.selectNodeContents(contentEditableElement)
  range.collapse(false)
  let selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
}

const addBlock = (menu) => emit('add-block', block.id, menu)

const onKeydownEnter = _ => addBlock()

const onKeydownShiftEnter = e => { 
  const tar = e.target
  tar.innerText += '\n\n'
  moveCursorToEnd(tar)
}

const onKeyupHandler = e => {
  if (e.key === '/') showMenu.value = true
}

const onInputHandler = e => emit('update:modelValue', e.target.innerText)

const selectSlashMenu = menu => {
  console.log(menu)
  closeSlashMenu()
  addBlock(menu)
}

const closeSlashMenu = () => showMenu.value = false

onClickOutside(menuRef, _ => closeSlashMenu())

const onClickPlus = e => {
  closeSlashMenu()
  addBlock()
}

provide('showSlashMenu', { showMenu, closeSlashMenu } )

onMounted(() => {
  inputRef.value.focus()
})

</script>

<template>
  <Popper class="block" :hover="true" offsetDistance="-98" placement="left" style="width: 100%;">
    <template #content>
      <div class="icons">
        <IconPlus color="gray" class="icon" @click="onClickPlus" />
        <IconDotsHandle color="gray" class="icon block-handle" />
      </div>
    </template>
    <div class="block-body">
      <Popper :show="showMenu" placement="bottom-start" style="width: 100%;">
        <template #content>
          <SlashMenu 
            ref="menuRef"
            @select-slash-menu="selectSlashMenu"
          />
        </template>
        <div>
          <div>
            <div class="block-input"
              ref="inputRef"
              contenteditable="true"
              placeholder="명령어는 '/' 입력"
              @keydown.shift.enter.exact="onKeydownShiftEnter"
              @keydown.prevent.enter.exact="onKeydownEnter"
              @keyup="onKeyupHandler"
              @input="onInputHandler"
              >{{ modelValue }}</div>
          </div>
        </div>
      </Popper>
    </div>
  </Popper>
</template>

<style scoped>
.block-body {
  margin-left: 100px;
}
[contenteditable] {
  outline: none;
}
[contenteditable="true"]:empty:focus:before {
  content: attr(placeholder);
}
.icons {
  display: flex;
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

.block-input {
  max-width: 100%; 
  width: 100%; 
  white-space: pre-wrap; 
  word-break: break-word; 
  caret-color: rgb(55, 53, 47); 
  padding: 3px 2px; 
  min-height: 1em; 
  color: rgb(55, 53, 47); 
  -webkit-text-fill-color: rgba(55, 53, 47, 0.5);
}
</style>
