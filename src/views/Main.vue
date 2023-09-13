<template>
  <div class="main">
    <!-- 头部 -->
    <el-header> <Header></Header> </el-header>
    <!-- 内容 -->
    <el-main>
      <Suspense>
        <router-view />
      </Suspense>
    </el-main>
    <!-- 底部 -->
    <el-footer> <Footer></Footer> </el-footer>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user"

const store = useUserStore()

// 设置用户信息
store.setUser({ name: "张三", age: 18 })
</script>

<style scope lang="scss">
.main {
  display: flex;
  flex-direction: column;
  width: $main-width;
  margin: 0 auto;
}
.el-header {
  height: $header-height;
}
.el-main {
  position: relative;
  z-index: 1;
}
.el-footer {
  z-index: 0;

  // 高度按照内容撑开
  height: auto;
}

// pc端
@media screen and (width >= 1200px) {
  .main {
    width: 80%;
  }
}

// tablet端
@media screen and (width >= 768px) and (width < 1200px) {
  .main {
    width: 90%;
  }
}

// 移动端
@media screen and (width < 768px) {
  .main {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
