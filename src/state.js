import {createStore, combineReducers} from 'redux'

// action types
const INC = 'INC'
const DEC = 'DEC'
const EDIT_PERSON = 'EDIT_PERSON'

// actions
export const decrement = value => ({type: DEC, payload: value})
export const increment = value => ({type: INC, payload: value})
export const editPerson = payload => ({type: EDIT_PERSON, payload})

// reducers
const initialCounterState = 0
const counterReducer = (
  state = initialCounterState,
  action,
) => {
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
