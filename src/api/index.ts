/** @module api 所有的请求 */
import instance from "@/request"
import type { codeDataRes, projectDataRes } from "@/types/request"

/**
 * 获取 code 数据，返回一个 Promise，请参考 types/request.ts
 * @function getCodeData
 * @returns {codeDataRes}
 */
export const getCodeData = (): codeDataRes => {
  return instance.get("/code/getData")
}

/**
 * 获取 project 数据，返回一个 Promise
 * @function getProjectData
 * @returns {projectDataRes}
 */
export const getProjectData = (): projectDataRes => {
  return instance.get("/project/getData")
}
