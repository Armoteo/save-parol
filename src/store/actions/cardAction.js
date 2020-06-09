import { LOAD_DATA_SQ, UPDATE_DATA_SQ } from '../types'

export const loadCards = (data) => {
  return {
    type: LOAD_DATA_SQ,
    payload: data
  }
}

export const updateCards = (id) => {
  return {
    type: UPDATE_DATA_SQ,
    payload: id
  }
}