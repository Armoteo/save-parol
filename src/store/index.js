import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { cardReducer } from './reducers/card'


const rooReducer = combineReducers({
  card: cardReducer
})

export default createStore(rooReducer, applyMiddleware(thunk))