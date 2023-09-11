import { createApp } from "vue"
import "@/styles/index.css"
import App from "./App.vue"
// 自动导入外部svg图标
import "virtual:svg-icons-register"
// pinia
import { createPinia } from "pinia"
// 持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// router
import router from "@/router"
import { globalRegister } from "@/global"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

// 挂载 $gsap
// app.provide(GSAP_SYMBOL, gsap)
// app.config.globalProperties.$gsap = gsap
app.use(globalRegister)
app.use(router)
app.use(pinia)
app.mount("#app")
