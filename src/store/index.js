import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {counterReducer} from './counter-reducer'
import {personReducer} from './person-reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  person: personReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
