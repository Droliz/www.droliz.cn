import { App } from "vue"
import gsapProperties from "./gsap"

export function globalRegister(app: App): void {
  app.use(gsapProperties)
}
