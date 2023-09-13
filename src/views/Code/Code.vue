<template>
  <div class="code">
    <div class="title"> 代码片段 </div>
    <!-- 搜索框 -->
    <div class="search">
      <input type="text" placeholder="Type your favorite snippet here, hehehe ....." />
      <div class="search-icon">
        <img src="@/assets/icons/search.svg" alt="search" style="width: 32px; height: 32px" />
      </div>
    </div>
    <div class="code-list">
      <template v-for="item in raw" :key="item.path">
        <CodeItem
          v-if="item.info.flag"
          :name="item.info.name"
          :info="item.info.desc"
          :lang="item.info.stack"
          :star="100"
          @click="router.push({ query: { path: item.path, name: item.info.name } })"
        />
      </template>
    </div>
  </div>
  <!-- 显示遮罩层 -->
  <div class="code-view" :class="isShowCodeView ? 'code-view-show' : ''">
    <div class="close" @click="closeCodeView">关闭</div>
    <CodeRawView :name="codeViewProps.name" :url="codeViewProps.url" />
  </div>
</template>

<script setup lang="ts">
import { useCodeStore } from "@/stores/code"

const router = useRouter()
// 获取当前的路由信息
const route = useRoute()
console.log("🚀 ~ file: Code.vue:35 ~ router:", router)
const codeStore = useCodeStore()
let raw = codeStore.states.codeList.raw

const isShowCodeView = ref(false)
const codeViewProps = ref({
  url: "",
  name: "",
})

onMounted(() => {
  // 获取 query 参数
  const query = route.query
  if (query.path && query.name) {
    // 显示代码
    showCodeView(query.path as string, query.name as string)
  } else {
    // 关闭代码
    closeCodeView()
  }
}),
  // 监听路由参数
  watch(
    () => route.query,
    query => {
      console.log("🚀 ~ file: Code.vue:57 ~ query:", query)
      if (query.path && query.name) {
        // 显示代码
        showCodeView(query.path as string, query.name as string)
      } else {
        // 关闭代码
        closeCodeView()
      }
    },
    // { immediate: true },
  )

/**
//  * 显示代码显示
//  * @param path 路径
//  * @param name 名字
//  */
function showCodeView(path: string, name: string): void {
  isShowCodeView.value = true
  codeViewProps.value.url = path
  codeViewProps.value.name = name
  // console.log(path, name)
}

/**
 * 关闭代码显示
 */
const closeCodeView = (): void => {
  isShowCodeView.value = false
}
</script>

<style scope lang="scss">
.code {
  display: flex;
  flex-direction: column;
  gap: 50px;
  .title {
    font-size: 32px;
    font-weight: 600;
    color: $text-color-title;
  }
  .search {
    position: relative;
    input {
      width: 100%;
      height: 60px;
      padding: 0 40px;
      font-size: $font-size-default;

      // 输入框内部的文字高度
      line-height: 60px;
      background-color: $bg-card-color;

      // color: $text-color-2;
      border: 1px solid $border-color-default;
      border-radius: 10px;
      outline: none;
      &::placeholder {
        color: $text-color-2;
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transform: translateY(-50%);
    }
  }
  .code-list {
    // 两列
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

// 遮罩层，显示代码示例，占满整个屏幕
.code-view {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgb(0 0 0 / 50%);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  // 缩小到左上角
  transform: scale(0);
  transform-origin: left top;
  will-change: transform, opacity;
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    display: none;
    padding: 10px 20px;
    cursor: pointer;
    background-color: $bg-card-color;
    border-radius: 10px;
  }
}
.code-view-show {
  opacity: 1;
  transform: scale(1);
}

@media screen and (width < 768px) {
  .code {
    .title {
      font-size: $font-size-large;
    }
    .search {
      input {
        height: 50px;
        padding: 0 20px;
        font-size: $font-size-small;
        line-height: 50px;
      }
      .search-icon {
        right: 10px;
      }
    }
    .code-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
