import type { projectItem, projectState, projectStore } from "@/types/store/project"
import { defineStore } from "pinia"

export const useProjectStore = defineStore(
  "project",
  (): projectStore => {
    const states: projectState = {
      projectList: ref<projectItem>([]),
    }

    const mutations = {
      SetProjectList(c: projectItem): void {
        states.projectList.value = c
        console.log(
          "🚀 ~ file: project.ts:14 ~ SetProjectList ~ states.projectList.value:",
          states.projectList.value,
        )
      },
    }

    return {
      states,
      mutations,
    }
  },
  {
    persist: {
      key: "project",
      storage: localStorage,
    },
  },
)
