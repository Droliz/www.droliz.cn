<template>
  <el-button type="success"><i-ep-SuccessFilled />Success</el-button>
  <el-button type="info"><i-ep-InfoFilled />Info</el-button>
  <el-button type="warning"><i-ep-WarningFilled />Warning</el-button>
  <el-button type="danger"><i-ep-WarnTriangleFilled />Danger</el-button>
  <el-button type="info"><svg-icon icon-class="timer-2" />SVG 本地图标</el-button>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user"

const store: any = useUserStore()

console.log(store.user)
// 设置用户信息
store.setUser({ name: "张三", age: 18 })
console.log(store.user)
</script>

<style scope lang="less"></style>
