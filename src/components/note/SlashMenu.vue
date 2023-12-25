<script setup>
import { ref, watch, inject } from 'vue'

const emit = defineEmits([
  'select-slash-menu', 
])

const { showMenu, closeSlashMenu } = inject('showSlashMenu')

const menuBoxRef = ref(null)
const menuRef = ref([])

const menus = ref([
  { type: 'BText', name: '텍스트' }, 
  { type: 'BH1', name: '제목1' }, 
  { type: 'BH2', name: '제목2' }, 
  { type: 'BH3', name: '제목3' }, 
  { type: 'BUl', name: '글머리 기호 목록' }, 
  { type: 'BOl', name: '번호 매기기 목록' }, 
  { type: 'BTodo', name: '할 일 목록' }, 
])

const onClickMenu = menu => {
  emit('select-slash-menu', menu)
}

const shiftFocus = (up) => {
  const dir = up ? 'previousElementSibling' : 'nextElementSibling'
  const targetEl = menuBoxRef.value.querySelector('.menu:focus')[dir]
  if (targetEl && targetEl.getAttribute('class') === 'menu') {
    targetEl.focus()
  } else {
    const menuEls = menuBoxRef.value.querySelectorAll('.menu')
    const menuEl = up ? menuEls[menuEls.length-1] : menuEls[0]
    menuEl.focus()
  }
}

const onKeydownEnter = menu => {
  emit('select-slash-menu', menu)
}

const onKeydownEsc = _ => {
  closeSlashMenu()
}

watch(showMenu, (next, prev) => {
  console.log('next:', next, 'prev:', prev)
  // TODO: 포커싱 작업
})

</script>

<template>
<div ref="menuBoxRef" class="menu-box" style="border-radius: 6px; background: white; backdrop-filter: none; position: relative; max-width: calc(100vw - 24px); box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px; overflow: hidden;">
  <ul class="menus"><div class="menu-title">기본블록</div>
    <li v-for="(m, idx) in menus" 
      :key="m.id"
      ref="menuRef"
      class="menu"
      tabindex="0"
      @click="onClickMenu(m)" 
      @keydown.up.exact="shiftFocus(true)"
      @keydown.down.exact="shiftFocus(false)"
      @keydown.prevent.enter.exact="onKeydownEnter(m)"
      @keydown.prevent.esc.exact="onKeydownEsc()"
    >{{m.name}}</li>
  </ul>
</div>
</template>

<style scoped>
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
  list-style: none;
  padding-left: 0;
}
.menu {
  padding: 3px;
}
.menu:focus {
  background-color: rgba(55, 53, 47, 0.08);
  outline: 0 none transparent;
}
.menu:hover {
  background-color: rgba(55, 53, 47, 0.08);
  cursor: pointer;
}
</style>