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
      <CodeItem
        v-for="item in 4"
        :key="item"
        name="项目名称"
        info="项目介绍"
        :lang="['vue', 'vite', 'ts']"
        :star="100"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
