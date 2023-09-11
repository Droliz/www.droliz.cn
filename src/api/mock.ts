import Mock from "mockjs"
import codeData from "./mockServerData/codeData"

Mock.mock("/mock/code/getData", "get", codeData)
