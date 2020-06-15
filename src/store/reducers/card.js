import { LOAD_DATA_SQ, UPDATE_DATA_SQ, DELETE_DATA_SQ } from "../types"

const initialState = {
  allCards: []
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SQ: return {
      ...state, allCards: action.payload
    }
    case UPDATE_DATA_SQ:
      const allCards = state.allCards.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        } else {
          return item
        }
      })
      return {
        ...state, allCards: allCards
      }

    case DELETE_DATA_SQ: return {
      ...state, allCards: state.allCards.filter(item => item.id !== action.payload)
    }
    default: return state
  }

}