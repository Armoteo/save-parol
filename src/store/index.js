import { createStore, combineReducers } from 'redux'
import { cardReducer } from './reducers/card'


const rooReducer = combineReducers({
  card: cardReducer
})

export default createStore(rooReducer)