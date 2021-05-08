import * as actionTypes from "./constants";
const defaultStore = {
  topBanners:[]
}
export const reducer = (store = defaultStore , action)=>{
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return {...store,topBanners:[]}

    default: 
      return store
  }
}
