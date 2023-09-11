<template>
  <div class="code-item">
    <div class="name">{{ name }}</div>
    <div class="info">{{ info }}</div>
    <div class="code-footer">
      <div class="lang">{{ lang }}</div>
      <div class="star">{{ star }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from "vue"
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: false,
  },
  lang: {
    type: Array<string>,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
})

const { name, info, star } = toRefs(props)
// 数组以 + 连接
const lang = computed(() => props.lang.join("+"))

const { proxy } = getCurrentInstance() as ComponentInternalInstance

onMounted(() => {
  // gsap 动画
  proxy?.$gsap.fromTo(".code-item",{
    x: -100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".code-item",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true, // 滚动时动画会跟随滚动
      // markers: true,
    },
  })
})
</script>

<style scope lang="scss">
.code-item {
  display: flex;
  flex-direction: column;
  height: 280px;
  padding: 20px 40px;
  cursor: pointer;
  background-color: $bg-card-color;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  will-change: transform, opacity;
  .name {
    font-size: $font-size-large;
    font-weight: 600;
    line-height: 48px;
    color: $text-color-title;
  }
  .info {
    flex-grow: 1;
    font-size: $font-size-default;
    color: $text-color-2;
  }
  .code-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &:hover {
    // 放大 避免被覆盖
    transform: scale(1.05) !important;
  }
}

@media screen and (width < 768px) {
  .code-item {
    height: 200px;
    padding: 20px;
    .name {
      font-size: $font-size-default;
      line-height: 32px;
    }
    .info {
      font-size: $font-size-small;
    }
  }
}
</style>
