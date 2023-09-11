import { Request } from "./request"

const request = new Request({ baseURL: "/mock", timeout: 6000 })
const instance = request.instance

export default instance
