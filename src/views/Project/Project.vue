<template>
  <div class="project-page">
    <div class="title">Project that i have been <span class="strong-1">done</span></div>
    <div class="pro-list">
      <pro-item
        v-for="item in projectList"
        :key="item.url"
        :url="item.url"
        :preview="item.imgUrl"
        :con="item.con"
        :name="item.name"
        :stack="item.stack"
      ></pro-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from "@/stores/project"
const projectStore = useProjectStore()
const projectList = projectStore.states.projectList
</script>

<style scope lang="scss">
.project-page {
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
