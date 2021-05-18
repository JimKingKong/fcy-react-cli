import { httpPost } from "@/http";
export const getBanner = async(params)=>{
  try {
     const result = await httpPost('/banner', params)
     return Promise.resolve(result.data)
  } catch (error) {
    throw(error)
  }
}