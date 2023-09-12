import { useCodeStore } from "@/stores/code"
import { getData } from "@/api/index"

// 初始化 store
async function initCodeDataList(): Promise<void> {
  const codeStore = useCodeStore()
  // 初始化 CodeData
  const { data } = await getData()
  codeStore.mutations.SetCodeList(data)
}

export { initCodeDataList }
