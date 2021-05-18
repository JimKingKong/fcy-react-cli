import * as actionTypes from "./constants";
import { Map } from "immutable";
const defaultStore = Map({
  topBanners:[]
})
export const reducer = (store = defaultStore , action)=>{
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...store, topBanners: action.topBanners}
      return store.set('topBanners',action.topBanners)
    default: 
      return store
  }
}
