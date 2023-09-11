import { App } from "vue"
// 全局引入 gsap 和 ScrollTrigger
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// App是用来确定类型
export default function gsapProperties(app: App) {
  app.config.globalProperties.$gsap = gsap
}
