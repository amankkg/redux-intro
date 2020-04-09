import {INC, DEC} from './action-types'

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

export {counterReducer}
