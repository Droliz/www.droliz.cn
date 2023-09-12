// codeDataRaw 数据结构
interface codeDataRaw {
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
interface CodeData {
  raw: codeDataRaw[]
}

// state声明
interface codeState {
  codeList: Ref<CodeData>
}

// mutation 的函数声明
interface codeMutation {
  SetCodeList(c: CodeData): void
}

// action 的函数声明
// interface codeAction {}

// getter 的函数声明
interface codeGetter {
  Get_4(): codeDataRaw[]
}

// codeStore 的返回结构
interface codeStore {
  states: codeState
  mutations: codeMutation
  // actions: codeAction
  getters: codeGetter
}

export type { codeGetter, codeDataRaw, CodeData, codeStore, codeMutation, codeState }
