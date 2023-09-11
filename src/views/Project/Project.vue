<template>
  <div class="project">
    <div class="title">Project that i have been <span class="strong-1">done</span></div>
    <div class="pro-list">
      <pro-item
        preview="/img/project-1.png"
        con="Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
        name="项目名称"
        :stack="['vue', 'vite', 'ts']"
      ></pro-item>
      <pro-item
        preview="/img/project-2.png"
        con="Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."
        name="项目名称"
        :stack="['vue', 'vite', 'ts']"
      ></pro-item>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scope lang="scss">
.project {
  display: flex;
  flex-direction: column;
  gap: 50px;

  // 左对齐
  align-items: flex-start;
  width: 100%;
  .title {
    width: 35%;
    font-size: $font-size-large * 2;
    font-weight: 600;
    color: $default-color;
    .strong-1 {
      color: #3bf686;
    }
  }
  .pro-list {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
  }
}

@media screen and (width < 768px) {
  .project {
    .title {
      width: 100%;
      font-size: $font-size-large;
    }
    .pro-list {
      gap: 80px;
    }
  }
}
</style>
