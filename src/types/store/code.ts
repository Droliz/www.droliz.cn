// codeDataRaw 数据结构
export interface codeDataRaw {
  path: string
  info: {
    name: string
    desc: string
    flag: boolean
    readme: string
    stack: string[]
    state: string
  }
}

// data-codeData请求返回的数据结构
export interface CodeData {
  raw: codeDataRaw[]
}

// state声明
export interface codeState {
  codeList: Ref<CodeData>
}

// mutation 的函数声明
export interface codeMutation {
  SetCodeList(c: CodeData): void
}

// action 的函数声明
// interface codeAction {}

// getter 的函数声明
export interface codeGetter {
  Get_4(): codeDataRaw[]
}

// codeStore 的返回结构
export interface codeStore {
  states: codeState
  mutations: codeMutation
  // actions: codeAction
  getters: codeGetter
}

// export type { codeGetter, codeDataRaw, CodeData, codeStore, codeMutation, codeState }
