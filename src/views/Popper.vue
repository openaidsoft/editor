<script setup>
import { ref } from 'vue'
import HandlePopper from '@/components/popper/handle-popper.vue'
import BlockPopper from '@/components/popper/block-popper.vue'

const showPopper = ref(false)

const onKeyupHandler = e => showPopper.value = e.key ==='/' ? true : false

const onBlur = (e) => showPopper.value = false
</script>

<template>
  <div class="container">
    <div class="notion-page-content"
      style="flex-shrink: 0; flex-grow: 1; max-width: 100%; display: flex; align-items: flex-start; flex-direction: column; font-size: 16px; line-height: 1.5; width: 100%; z-index: 4; padding-bottom: 30vh; padding-left: calc(96px + env(safe-area-inset-left)); padding-right: calc(96px + env(safe-area-inset-right));">
      <div data-block-id="93f206ad-3686-4937-8bc3-405c844ba4de" class="notion-selectable notion-text-block"
        style="width: 100%; max-width: 702px; margin-top: 2px; margin-bottom: 0px;">
        <BlockPopper :show="showPopper" style="width: 100%;">
          <template #content>
            <div>This is the Popper content</div>
          </template>
          <HandlePopper :hover="true" offsetDistance="0" placement="left" style="width: 100%;">
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
          </HandlePopper>
        </BlockPopper>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 100px;
}

[contenteditable] {
  -webkit-tap-highlight-color: transparent;
  background-color: bisque;
}
:deep(:root) {
  --popper-theme-background-color: lightgrey;
}
</style>