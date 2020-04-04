import {createStore, combineReducers} from 'redux'

// action types
const INC = 'INC'
const DEC = 'DEC'
const EDIT_PERSON = 'EDIT_PERSON'

// actions
export const decrementBy5 = {type: DEC, payload: 5}
export const decrementBy25 = {type: DEC, payload: 25}
export const incrementBy5 = {type: INC, payload: 5}
export const incrementBy25 = {type: INC, payload: 25}
export const editFirstName = {
  type: EDIT_PERSON,
  payload: {},
}
export const editLastName = {type: EDIT_PERSON, payload: {}}

// reducers
const initialCounterState = 0
const counterReducer = (
  state = initialCounterState,
  action,
) => {
  // {type: '__INIT_REDUX_STORE__'}
  switch (action.type) {
    case INC:
      return state + action.payload
    case DEC:
      return state - action.payload
    default:
      return state
  }
}

const initialPersonState = {firstName: 'John', lastName: 'Doe'}
const personReducer = (
  state = initialPersonState,
  action,
) => {
  switch (action.type) {
    case EDIT_PERSON:
      const newState = {...state}

      if (action.payload.field === 'firstName')
        newState.firstName = action.payload.value
      else if (action.payload.field === 'lastName')
        newState.lastName = action.payload.value

      return newState
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  person: personReducer,
})

export const store = createStore(rootReducer)
