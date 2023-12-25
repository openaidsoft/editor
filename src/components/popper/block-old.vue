<script setup>
import { ref } from 'vue'

const showPopper = ref(false)
const showHandle = ref(false)

const onKeyupHandler = (e) => {
  showPopper.value = e.key ==='/' ? true : false
}

const onBlur = (e) => showPopper.value = false
</script>

<template>
  <div data-block-id="93f206ad-3686-4937-8bc3-405c844ba4de" class="notion-selectable notion-text-block"
    style="width: 100%; max-width: 702px; margin-top: 2px; margin-bottom: 0px;">
    <Popper :show="showPopper" content="This is the Popper content 🍿" style="width: 100%;">
    <Popper :hover="true" offsetDistance="0" content="🍿" placement="left" style="width: 100%;">
    <div style="color: inherit; fill: inherit;">
      <div style="display: flex;">
        <div class="notranslate" spellcheck="false" placeholder="AI 기능은 '스페이스 키', 명령어는 '/' 입력"
          data-content-editable-leaf="true"
          style="max-width: 100%; width: 100%; white-space: pre-wrap; word-break: break-word; caret-color: rgb(55, 53, 47); padding: 3px 2px; min-height: 1em; color: rgb(55, 53, 47); -webkit-text-fill-color: rgba(55, 53, 47, 0.5);"
          contenteditable="true"
          @keyup="onKeyupHandler"
          @blur="onBlur"
          ></div>
      </div>
    </div>
    </Popper>
    </Popper>
  </div>
</template>

<style scoped>
[contenteditable] {
  -webkit-tap-highlight-color: transparent;
  background-color: bisque;
}

:deep(.popper) {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

</style>
