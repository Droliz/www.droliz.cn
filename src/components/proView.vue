<template>
  <div class="code-view" :class="isShowCodeView ? 'code-view-show' : ''">
    <div class="close" @click="closeCodeView">关闭</div>
    <CodeRawView :name="codeViewProps.name" :url="codeViewProps.url" />
  </div>
</template>

<script setup lang="ts">
const isShowCodeView = ref(false)
const codeViewProps = ref({
  url: "",
  name: "",
})

/**
 * 关闭代码显示
 */
const closeCodeView = (): void => {
  isShowCodeView.value = false
}
</script>

<style scope lang="scss">
// 遮罩层，显示代码示例，占满整个屏幕
.code-view {
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 999;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgb(0 0 0 / 50%);

  // opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  // 缩小到左上角
  // transform: scale(0);
  // transform-origin: left top;
  will-change: transform, opacity;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    padding: 10px 20px;
    cursor: pointer;
    background-color: $bg-card-color;
    border-radius: 10px;
  }
}
</style>
