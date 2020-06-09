import { LOAD_DATA_SQ, UPDATE_DATA_SQ } from "../types"

const initialState = {
  allCards: []
}


export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SQ: return {
      ...state, allCards: action.payload
    }
    case UPDATE_DATA_SQ: return {
      ...state, allCards: action.payload
    }
    default: return state
  }

}