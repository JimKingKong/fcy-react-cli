import * as Types  from "./constants";
import { getSongDetail } from "@/services/player";
export const changeSongDetail = (data)=>({
  type: Types.CHANGE_CURRENT_SONG,
  data
})
export const getSongDetailAction = (params) =>{
  return (dispatch,getState)=>{
    getSongDetail(params).then(res=>{
      if(res.code === 200){
        
        console.log(res, 'rdsdata')
        dispatch(changeSongDetail(res.songs[0]))
      }

    })
  }
}