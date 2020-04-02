import React from 'react'
import {createStore} from 'redux'

const reducer = (state = 0, action) => { // {type: '__INIT_REDUX_STORE__'}
  switch (action.type) {
    case 'INC':
      return state + action.payload
    case 'DEC':
      return state - action.payload
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

const decrementBy5 = {type: 'DEC', payload: 5}
const incrementBy25 = {type: 'INC', payload: 25}

store.dispatch(decrementBy5)
store.dispatch(incrementBy25)

const App = () => {
  // const [value, dispatch] = useReducer(reducer, 0)

  // const decrementBy = n => () => dispatch({type: 'dec', payload: n})

  // return (
  //   <>
  //     <h1>{value}</h1>
  //     <button onClick={decrementBy(1)}>
  //       decrement
  //     </button>
  //     <button onClick={decrementBy(5)}>
  //       decrement by 5
  //     </button>
  //     <br />
  //     <button onClick={() => dispatch({type: 'inc', payload: 1})}>
  //       increment
  //     </button>
  //     <button onClick={() => dispatch({type: 'inc', payload: 5})}>
  //       increment by 5
  //     </button>
  //   </>
  // )
  return <p>foo</p>
}

export {App}
