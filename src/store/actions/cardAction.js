import { LOAD_DATA_SQ, CREATE_DATA_SQ, UPDATE_DATA_SQ, DELETE_DATA_SQ } from '../types'
import { DB } from '../../db'

export const loadCards = () => {
  return async dispatch => {
    const data = await DB.getData()
    dispatch({
      type: LOAD_DATA_SQ,
      payload: data
    })
  }
}

export const addCard = card => async dispatch => {
  const newCard = {
    name: card[0],
    login: card[1],
    pass: card[2],
    url: card[3]
  }
  const cardId = await DB.createData(newCard)
  const payload = card
  payload.id = cardId
  dispatch({
    type: CREATE_DATA_SQ,
    payload
  })
}


export const updateCard = (data) => async dispatch => {
  const updateCard = {
    id: data[0],
    name: data[1],
    login: data[2],
    pass: data[3],
    url: data[4]
  }
  await DB.updateData(updateCard)
  dispatch({
    type: UPDATE_DATA_SQ,
    payload: updateCard
  })
}

export const deleteCard = (id) => async dispatch => {
  await DB.deleteData(id)
  dispatch({
    type: DELETE_DATA_SQ,
    payload: id
  })
}