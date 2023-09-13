import type {
  // codeAction,
  codeGetter,
  codeState,
  CodeData,
  codeStore,
  codeMutation,
} from "@/types/store/code"
import { defineStore } from "pinia"

// 命名方式：use + StoreName + Store
export const useCodeStore = defineStore(
  "codeId",
  (): codeStore => {
    const states: codeState = {
      codeList: ref<CodeData>({
        raw: [],
      }),
    }

    const mutations: codeMutation = {
      SetCodeList(c: CodeData) {
        states.codeList.value = c
      },
    }

    // const actions: codeAction = {}

    const getters: codeGetter = {
      Get_4() {
        return states.codeList.value.raw.filter(item => item.info.flag).slice(0, 4)
      },
    }

    return {
      states,
      mutations,
      // actions,
      getters,
    }
  },
  {
    persist: {
      key: "code",
      storage: localStorage,
    },
  },
)
