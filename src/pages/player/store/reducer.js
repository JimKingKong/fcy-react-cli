import { Map  } from "immutable";
import { CHANGE_CURRENT_SONG } from "./constants";
const defaultStore = Map({
  songDetail:{}
})

export const reducer = (store = defaultStore,action) =>{
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return store.set('songDetail',action.data)
    default:
      return store
  }
}
