import Mock from "mockjs"
import codeData from "./mockServerData/codeData"
import projectData from "./mockServerData/projectData"

Mock.mock("/mock/code/getData", "get", codeData)
Mock.mock("/mock/project/getData", "get", projectData)
