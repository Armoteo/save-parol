import { CREATE_DATA_SQ } from '../types'

export const cardReducer = (state, action) => {
  switch (action.type) {
    case CREATE_DATA_SQ:
      return { ...state, cards: [...state.cards, action.payload] }
    default:
      return state
  }
}