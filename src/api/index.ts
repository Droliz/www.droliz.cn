// 请求
import instance from "@/request"

const getData = () => {
  return instance.get("/code/getData")
}

export { getData }
