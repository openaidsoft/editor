<script>
import { 
  Paragraph as BText,
  Header1 as BH1, 
} from './blocks'

export default {
  components: {
    BText,
    BH1,
  },
};
</script>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { v4 as uuidv4 } from 'uuid'

const blocks = ref([
  {
    id: uuidv4(),
    content: '',
    type: 'BText',
    tasks: []
  },
])
const blockBoxRef = ref(null)

const addBlock = (currId, menu) => {
  const ls = blocks.value
  const idx = ls.findIndex(o => o.id === currId)
  const blockObj = {
    id: uuidv4(),
    content: '',
    type: 'BText',
    tasks: []
  }
  if (menu) {
    blockObj.content = menu.content
    blockObj.type = menu.type
  }
  ls.splice(idx+1, 0, blockObj)
} 

const shiftFocus = (up) => {
  const dir = up ? 'previousElementSibling' : 'nextElementSibling'
  blockBoxRef.value.targetDomElement.querySelector('.focus :focus').closest('.focus')[dir]?.querySelector('.block-input').focus()
}

const saveData = () => {
  console.log(blocks.value)
}

</script>

<template>
<div>
  <div>
    <button class="save" @click="saveData">저장</button>
  </div>
  <div class="container">
    <div class="title-box">
      <div>
        <div style="color: rgb(55, 53, 47); font-weight: 700; line-height: 1.2; font-size: 40px; font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Helvetica, &quot;Apple Color Emoji&quot;, Arial, sans-serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;; cursor: text; display: flex; align-items: center;">
          <h1 class="notranslate" spellcheck="true" placeholder="제목 없음" data-content-editable-leaf="true" contenteditable="true" style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; font-size: 1em; font-weight: inherit; margin: 0px;"></h1>
        </div>
        <div style="margin-left: 4px;"></div>
      </div>
    </div>
    <draggable
      class="drag-area"
      ref="blockBoxRef"
      tag="div"
      :list="blocks"
      handle=".block-handle"
      item-key="id"
    >
      <template #item="{ element }">
        <component 
          :is="element.type" 
          class="focus"
          :block="element"
          v-model.lazy="element.content"
          @add-block="addBlock"
          @keydown.up="shiftFocus(true)"
          @keydown.down="shiftFocus(false)"
        />
      </template>
    </draggable>
  </div>
</div>
</template>

<style scoped>
.container {
  padding: 0 180px 0 100px;
}
.title-box {
  /* margin-left: 98px; */
  margin: 20px 0 20px 98px;
}
[contenteditable] {
  outline: none;
}
[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  
  min-height: 1em; 
  color: rgb(55, 53, 47); 
  -webkit-text-fill-color: rgba(55, 53, 47, 0.15); 
  cursor: text;
}
</style>