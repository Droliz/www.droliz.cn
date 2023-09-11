import { AxiosResponse } from "axios"

interface statusCode {
  [propName: number]: string
}

type Result<T> = {
  code: number
  message: string
  result: T
}

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

// codeData请求返回的数据结构
type codeDataRes = Promise<AxiosResponse<CodeData, any>>

export type { statusCode, Result, codeDataRes, CodeData, codeDataRaw }
