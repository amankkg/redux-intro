import {EDIT_PERSON, START_LOADING, FINISH_LOADING} from './action-types'

const initialPersonState = {
  firstName: 'John',
  lastName: 'Doe',
  loading: false,
}

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
    case START_LOADING:
      return {...state, loading: true}
    case FINISH_LOADING:
      return {...state, loading: false}
    default:
      return state
  }
}

export {personReducer}
