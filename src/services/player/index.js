import { httpPost } from "@/http";
export const getSongDetail = async (params) => {
  try {
    const result = await httpPost('/song/detail', params)
    return Promise.resolve(result.data)
  } catch (error) {
    throw (error)
  }
}

export async function getLyric(params) {
  try {
    const result = await httpPost('/lyric', params)
    return Promise.resolve(result.data)
  } catch (error) {
    throw (error)
  }
}