<template>
  <div class="footer">
    <div class="tags">
      <router-link to="/home">首页</router-link>
      <router-link to="/project">项目</router-link>
      <router-link to="/code">代码片段</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <div class="link">
      <a href="http://www.droliz.cn">
        <img src="@/assets/icons/facebook.svg" alt="facebook" style="width: 24px; height: 24px" />
      </a>
      <a href="http://www.droliz.cn">
        <img src="@/assets/icons/ins.svg" alt="instarage" style="width: 24px; height: 24px" />
      </a>
      <a href="http://www.droliz.cn">
        <img src="@/assets/icons/twitter.svg" alt="twitter" style="width: 24px; height: 24px" />
      </a>
      <a href="http://www.droliz.cn">
        <img src="@/assets/icons/github.svg" alt="github" style="width: 24px; height: 24px" />
      </a>
    </div>
    <div class="flod">
      <!-- 备案 -->
      <a href="https://beian.miit.gov.cn/">鄂ICP备2022005574号-1</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scope lang="scss">
.footer {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: auto;
  padding-bottom: 50px;
  margin-top: 20px;
  color: $text-color-default;

  // text-align: center;
  border-top: 1px solid $border-color-default;
  .tags {
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
    justify-content: center;
    width: 100%;
    a {
      height: $header-box-height;
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
  .link {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .flod {
    a {
      color: $text-color-default;
      &:hover {
        color: $default-color;

        // 字体由外向内模糊 4px
        text-shadow: 0 0 4px $text-color-default;
      }
    }
  }
}

@media screen and (width < 768px) {
  .footer {
    gap: 20px;
    width: 100%;
    padding: 10px;
    .tags {
      display: none;
    }
  }
}
</style>
