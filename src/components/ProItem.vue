<template>
  <div class="pro-item">
    <div class="preview">
      <div class="share">
        <img src="@/assets/icons/Share.svg" alt="share" style="width: 16px; height: 16px" />
      </div>
      <div class="img">
        <img :src="preview" alt="preview" />
      </div>
    </div>
    <div class="pro-info">
      <div class="pro-name">{{ name }}</div>
      <!-- 技术栈是数组 -->
      <div class="te-stack">{{ stack }}</div>
      <div class="pro-con"> {{ con }} </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance } from "vue"

// props 需要传入四个数据，预览图片url，项目名称，项目技术栈，项目简介
const props = defineProps({
  preview: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  stack: {
    type: Array,
    required: true,
  },
  con: {
    type: String,
    required: true,
  },
})

// 项目预览图片
const preview = ref(props.preview)
// 项目名称
const name = ref(props.name)
// 项目技术栈，使用 " " 连接
const stack = ref(props.stack.join(" "))
// 项目简介
const con = ref(props.con)

const { proxy } = getCurrentInstance() as ComponentInternalInstance

onMounted(() => {
  // fromTo 动画
  proxy?.$gsap.fromTo(
    ".pro-item", // 动画元素
    {
      opacity: 0,
      x: -100,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".pro-item",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true, // 平滑滚动
        // markers: true,
      },
    },
  )
})
</script>

<style scope lang="scss">
.pro-item {
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 100%;

  // opacity: 0;
  // transform: translate(-100px, 0);
  .preview {
    position: relative;
    flex-shrink: 0;

    // 即便设置了
    width: 300px;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    background-color: $bg-card-color;
    transition: transform 0.3s ease-in-out;
    will-change: transform;
    .share {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    .img {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        position: absolute;

        // 居中
        bottom: -10%;
        left: 50%;
        width: 85%;
        height: 85%;
        transition: transform 0.3s ease-in-out, bottom 0.3s ease-in-out, left 0.3s ease-in-out,
          width 0.3s ease-in-out, height 0.3s ease-in-out;
        transform: translateX(-50%);
        will-change: transform, bottom, left, width, height;
      }
    }
  }
  .preview:hover {
    transform: scale(1.1);
    .img {
      img {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(0);
      }
    }
  }
  .pro-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
    .pro-name {
      font-size: $font-size-large;
      font-weight: 600;
      line-height: 30px;
      color: $text-color-title;
    }
    .te-stack {
      font-size: $font-size-small;
      color: $text-color-s-4;
    }
    .pro-con {
      font-size: $font-size-default;
      color: $text-color-2;
    }
  }
}

@media screen and (width < 768px) {
  .pro-item {
    flex-direction: column;
    gap: 20px;
    .preview {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
