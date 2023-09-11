<template>
  <div class="header">
    <div class="logo">
      <a href="/">DROLIZ</a>
    </div>
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/project">项目</router-link>
      <router-link to="/code">代码片段</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <!-- 响应式显示的按钮，用于展示菜单栏 -->
    <div class="select">
      <img
        @click="changeMenu"
        src="@/assets/icons/menu.svg"
        alt="menu"
        style="width: 32px; height: 32px"
      />
    </div>
    <div class="menu" :class="isShowMenu ? 'showMenu' : ''">
      <router-link to="/home">首页</router-link>
      <router-link to="/project">项目</router-link>
      <router-link to="/code">代码片段</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// 控制菜单栏的显示与隐藏
const isShowMenu = ref<boolean>(false)

const changeMenu = () => {
  console.log(isShowMenu.value)
  isShowMenu.value = !isShowMenu.value
}
</script>

<style scope lang="scss">
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border-bottom: 1px solid $border-color-default;
  .logo {
    font-size: $font-size-large;
    color: $default-color;
  }
  .select {
    position: absolute;
    top: 50%;
    right: 10px;
    z-index: 999;
    transform: translateY(-50%);
    img {
      cursor: pointer;
    }
  }
  .menu {
    position: absolute;
    top: 40%;
    right: 20px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100px;
    padding: 10px;
    background-color: $bg-card-color;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease-in, transform 0.3s ease-in;
    transform: scale(0);

    // 缩放中心为右上角
    transform-origin: top right;
    will-change: transform, opacity;
    a {
      color: $text-color-default;
      cursor: pointer;
      &:hover {
        color: $default-color;
        text-shadow: 0 0 4px $text-color-default;
      }
    }
  }
  .showMenu {
    opacity: 1;
    transform: scale(1);
  }
}

// nav 下的所有 router-link 标签
.nav {
  display: none;
  a {
    height: $header-box-height;
    margin-left: $header-box-margin;
    line-height: $line-height-default;
    color: $text-color-default;
    &:hover {
      color: $default-color;

      // 字体由外向内模糊 4px
      text-shadow: 0 0 4px $text-color-default;
    }
    &.router-link-active {
      color: $default-color;

      // 字体由外向内模糊 4px
      text-shadow: 0 0 4px $text-color-default;
    }
  }
}

// 响应式不同设备的显示 $desktop-width: 1200px;
@media screen and (width >= 1200px) {
  .nav {
    display: flex;
  }
  .select {
    display: none;
  }
  .menu {
    display: none;
  }
}
</style>
