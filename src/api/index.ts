// 请求
import instance from "@/request"
import type { codeDataRes, projectDataRes } from "@/types/request"

export const getCodeData = (): codeDataRes => {
  return instance.get("/code/getData")
}

export const getProjectData = (): projectDataRes => {
  return instance.get("/project/getData")
}
