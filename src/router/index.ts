import { createRouter, createWebHistory } from "vue-router"

// 自动读取`views`文件夹下的`.vue`文件，生成路由配置
const modules = import.meta.glob("../views/**/*.vue")
const routes_1 = Object.keys(modules).map(path => {
  const name = path.match(/\.\/views(.*)\.vue$/)?.[1]
  return {
    path: name?.replace(/\/index$/, "") || "/",
    name: name?.replace(/\//g, "-").replace(/^-/, "") || "home",
    component: modules[path],
  }
})

console.log(routes_1)

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/views/Main.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
      },
      {
        path: "project",
        name: "Project",
        component: () => import("@/views/Project/Project.vue"),
      },
      {
        path: "code",
        name: "Code",
        component: () => import("@/views/Code/Code.vue"),
      },
      {
        path: "About",
        name: "About",
        component: () => import("@/views/About/About.vue"),
      },
      {
        path: "Blog",
        name: "Blog",
        component: () => import("@/views/Blog/Blog.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
