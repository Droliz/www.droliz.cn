import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import eslintPlugin from "vite-plugin-eslint"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

// 自动导入外部svg图标
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

import path from "path"

const pathSrc = path.resolve(__dirname, "./src")
const env = loadEnv("", process.cwd())
console.log(env)

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/base.scss";`, // 全局基础样式
      },
    },
  },
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ["src/**/*.ts", "src/**/*.js", "src/**/*.vue", "src/*.ts", "src/*.js", "src/*.vue"],
    }),
    AutoImport({
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({}),
      ],
      eslintrc: {
        enabled: false, // 是否自动生成 eslint 规则，建议生成之后设置 false
        filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
      },
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"),
    }),
    Components({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"], // element-plus图标库，其他图标库 https://icon-sets.iconify.design/
        }),
      ],
      dts: path.resolve(pathSrc, "types", "components.d.ts"),
    }),
    Icons({
      // 自动安装图标库
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // 指定需要导入的svg目录
      iconDirs: [path.resolve(pathSrc, "assets/icons")],
      // 指定symbolId格式
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  server: {
    port: Number(env.VITE_APP_PORT) || 3000,
  },
})
