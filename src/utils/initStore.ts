import { useCodeStore } from "@/stores/code"
import { useProjectStore } from "@/stores/project"
import { getCodeData, getProjectData } from "@/api/index"

// 初始化 store
async function initCodeDataList(): Promise<void> {
  let res
  // 初始化 CodeData
  const codeStore = useCodeStore()
  res = await getCodeData()
  codeStore.mutations.SetCodeList(res.data)

  // 初始化 projectData
  const projectStore = useProjectStore()
  res = await getProjectData()
  projectStore.mutations.SetProjectList(res.data)
}

export { initCodeDataList }
