import { AxiosResponse } from "axios"
import type { CodeData } from "@/types/store/code"
import type { projectItem } from "@/types/store/project"

export interface statusCode {
  [propName: number]: string
}

export type Result<T> = {
  code: number
  message: string
  result: T
}

// codeData请求返回的数据结构
export type codeDataRes = Promise<AxiosResponse<CodeData, any>>

// projectData请求返回的数据结构
export type projectDataRes = Promise<AxiosResponse<projectItem, any>>
