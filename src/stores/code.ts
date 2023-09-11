import type { CodeData } from "@/types/request/index"
import { defineStore } from "pinia"

// 命名方式：use + StoreName + Store
export const useCodeStore = defineStore(
  "codeId",
  () => {
    const codeList = ref<CodeData[]>()

    const setCodeList = (c: CodeData[]) => {
      codeList.value = c
    }

    return {
      codeList,
      setCodeList,
    }
  },
  {
    persist: {
      key: "codeList",
      storage: window.sessionStorage,
    },
  },
)
