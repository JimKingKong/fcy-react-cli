import { CHANGE_TOP_BANNERS } from "./constants";
import { getBanner} from '@/services/discover/recommend'
export const changeBannerAction = (res)=>({
  type: CHANGE_TOP_BANNERS,
  topBanners: res
})
export const getBannerAction = (params)=>{
  return (dispatch,getState)=>{
    getBanner(params).then(res=>{
      console.log(res,'res')
      if(res.code === 200 ){
        const data = res.banners
        dispatch(changeBannerAction(data))
      }
    })
  }
}