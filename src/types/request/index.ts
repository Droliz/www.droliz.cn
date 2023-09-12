import { AxiosResponse } from "axios"
import type { codeDataRaw, CodeData } from "@/types/store/code"

interface statusCode {
  [propName: number]: string
}

type Result<T> = {
  code: number
  message: string
  result: T
}

// codeData请求返回的数据结构
type codeDataRes = Promise<AxiosResponse<CodeData, any>>

export type { statusCode, Result, codeDataRes, CodeData, codeDataRaw }
