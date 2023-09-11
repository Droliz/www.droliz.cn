import type { User } from "@/types/store/user"
import { defineStore } from "pinia"

// 命名方式：use + StoreName + Store
export const useUserStore = defineStore(
  "userId",
  () => {
    const user = ref<User>()

    const setUser = (u: User) => {
      user.value = u
    }

    return {
      user,
      setUser,
    }
  },
  {
    persist: {
      key: "user",
      storage: window.localStorage,
    },
  },
)
