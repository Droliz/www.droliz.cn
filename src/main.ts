import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
// 自动导入外部svg图标
import "virtual:svg-icons-register"
// pinia
import { createPinia } from "pinia"
// 持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// router
import router from "@/router"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount("#app")
