import { projectItem } from "@/types/store/project"

const projectData: projectItem = [
  {
    name: "vue.droliz.cn",
    con: "使用vue2+echarts实现的简易后台管理系统，包含登录、数据可视化等功能、人员管理、动态路由。目前提供两个账号：admin、qtw，密码均为账号名称。此外使用的element-ui组件库完成页面布局与美化，mockjs模拟数据，axios请求数据，echarts实现数据可视化。",
    url: "http://www.vue.droliz.cn/",
    stack: ["vue2", "echarts", "javascript", "mockjs", "element-ui", "axios", "vue-router", "vuex"],
    state: true,
    imgUrl: "/pro-img/vue.droliz.cn.png",
  },
  {
    name: "droliz.cn",
    con: "使用完全原生的javascript、html、css实现简单的导航。结合了多个搜索引擎方式，不需要切换网站就可以在不同的网站上搜索内容",
    url: "http://www.droliz.cn/",
    stack: ["html5", "css3", "javascript"],
    state: true,
    imgUrl: "/pro-img/droliz.cn.png",
  },
]

export default projectData
