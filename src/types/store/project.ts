export interface projectRaw {
  name: string // 项目名称
  con: string // 项目简介
  url: string // 项目地址
  stack: string[] // 技术栈
  state: boolean // 上线状态
  imgUrl: string // 项目预览图片
}

export type projectItem = projectRaw[]

export interface projectState {
  projectList: Ref<projectItem>
}

export interface projectMutation {
  SetProjectList(c: projectItem): void
}

export interface projectStore {
  states: projectState
  mutations: projectMutation
}
