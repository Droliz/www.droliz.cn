<template>
  <div class="CodeRawView">
    <div class="editor-window">
      <div class="editor-header">
        <div class="left">
          <!-- 左箭头 -->
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-chevron-left color-fg-muted"
          >
            <path
              fill-rule="evenodd"
              d="M15.28 5.22a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 000 1.06l6.25 6.25a.75.75 0 101.06-1.06L9.56 12l5.72-5.72a.75.75 0 000-1.06z"
            ></path>
          </svg>
          <!-- 右箭头 -->
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-chevron-right color-fg-muted"
          >
            <path
              fill-rule="evenodd"
              d="M8.72 18.78a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06L9.78 5.22a.75.75 0 00-1.06 1.06L14.44 12l-5.72 5.72a.75.75 0 000 1.06z"
            ></path>
          </svg>
        </div>
        <div class="center">
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-lock color-fg-subtle"
          >
            <path
              fill-rule="evenodd"
              d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"
            ></path>
          </svg>
          <div class="overflow-hidden content check">
            {{ name }}
          </div>
          <svg
            aria-hidden="true"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            data-view-component="true"
            class="octicon octicon-sync color-fg-subtle"
          >
            <path
              fill-rule="evenodd"
              d="M8 2.5a5.487 5.487 0 00-4.131 1.869l1.204 1.204A.25.25 0 014.896 6H1.25A.25.25 0 011 5.75V2.104a.25.25 0 01.427-.177l1.38 1.38A7.001 7.001 0 0114.95 7.16a.75.75 0 11-1.49.178A5.501 5.501 0 008 2.5zM1.705 8.005a.75.75 0 01.834.656 5.501 5.501 0 009.592 2.97l-1.204-1.204a.25.25 0 01.177-.427h3.646a.25.25 0 01.25.25v3.646a.25.25 0 01-.427.177l-1.38-1.38A7.001 7.001 0 011.05 8.84a.75.75 0 01.656-.834z"
            ></path>
          </svg>
        </div>
        <div class="right">
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            width="24"
            data-view-component="true"
            class="octicon octicon-plus color-fg-muted"
          >
            <path
              fill-rule="evenodd"
              d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="editor-body">
        <iframe :src="url" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    default: "demo_web\\原生\\02、瀑布流\\index.html",
  },
  name: {
    type: String,
    default: "mona-github-github-g59jpq2w5w7.github.dev",
  },
})

const { url, name } = toRefs(props)
</script>

<style scope lang="scss">
.CodeRawView {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.editor-window {
  /* height: 700px; */
  position: relative;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: $color-canvas-overlay;
  border: 0.8px solid $color-border-default;
  border-radius: 8px;
  .editor-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 18px;
    border-bottom: 0.8px solid $color-border-default;
    .left {
      align-items: center;
    }
    .center {
      display: flex;
      align-items: center;
      justify-content: space-between;

      /* width: 480px; */
      height: 30px;
      padding: 4px 8px;
      line-height: 21px;
      background-color: $color-canvas-default;
      border: 0.8px solid $color-border-default;
      border-radius: 6px;
      .content {
        padding-right: 64px;
        padding-left: 64px;
      }
    }
    .color-fg-muted {
      color: $color-fg-muted !important;
    }
    .octicon {
      display: inline-block;
      overflow: visible !important;
      vertical-align: text-bottom;
      fill: currentColor;
    }
  }
  .editor-body {
    flex-grow: 1;
    width: 100%;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>
