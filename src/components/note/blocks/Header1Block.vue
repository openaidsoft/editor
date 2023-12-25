<script setup>
import { ref, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import IconPlus from '@/components/popper/icon-plus.vue'
import IconDotsHandle from '@/components/popper/icon-dots-handle.vue'

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
const menus = ref([
  { type: 'p', name: '텍스트' }, 
  { type: 'h1', name: '제목1' }, 
  { type: 'h2', name: '제목2' }, 
  { type: 'h3', name: '제목3' }, 
  { type: 'ul', name: '글머리 기호 목록' }, 
  { type: 'ol', name: '번호 매기기 목록' }, 
  { type: 'todo', name: '할 일 목록' }, 
])
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

const addBlock = () => emit('add-block', block.id)

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

const onClickMenu = m => {
  console.log(m)
  showMenu.value = false
}

onClickOutside(menuRef, _ => showMenu.value && (showMenu.value = false))

const onClickPlus = e => {
  showMenu.value = false
  addBlock()
}

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
          <div ref="menuRef" class="menu-box" style="border-radius: 6px; background: white; backdrop-filter: none; position: relative; max-width: calc(100vw - 24px); box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; overflow: hidden;">
            <div class="menus">
              <div class="menu-title">기본블록</div>
              <div v-for="m in menus" :key="m.id" @click="onClickMenu(m)" class="menu">{{m.name}}</div>
            </div>
          </div>
        </template>
        <div>
          <div>
            <h2 ref="inputRef"
              class="block-input h1"
              :class="{ h1_empty: modelValue === '' ? true : false }" 
              spellcheck="true" 
              placeholder="제목1" 
              data-content-editable-leaf="true" 
              contenteditable="true" 
              @keydown.shift.enter.exact="onKeydownShiftEnter"
              @keydown.prevent.enter.exact="onKeydownEnter"
              @keyup="onKeyupHandler"
              @input="onInputHandler"
              >{{ modelValue }}</h2>
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

.menu-box {
  padding: 10px;
}
.menu-title {
  color: rgba(55, 53, 47, 0.65);
  font-size: 12px;
  margin-bottom: 8px;
}
.menus {
  font-size: 14px;
}
.menu {
  padding: 3px;
}
.menu:hover {
  background-color: rgba(55, 53, 47, 0.08);
  cursor: pointer;
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

.h1 {
  max-width: 100%; 
  width: 100%; 
  white-space: pre-wrap; 
  word-break: break-word; 
  caret-color: rgb(55, 53, 47); 
  padding: 3px 2px; 
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; 
  font-weight: 600; 
  font-size: 1.875em; 
  line-height: 1.3; 
  margin: 0px; 
}
.h1_empty {
  min-height: 1em; 
  color: rgb(55, 53, 47); 
  -webkit-text-fill-color: rgba(55, 53, 47, 0.2);
}
</style>
