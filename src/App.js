import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, loadInitialStateThunk } from './store/action-creators'
import { Controls } from './controls'
import { PersonInputs } from './person-inputs'

const App = () => {
  const [personId, setPersonId] = useState(1)
  const onPersonChange = e => setPersonId(e.target.value)

  const state = useSelector(state => ({
    counter: state.counter,
    fullName: state.person.firstName + ' ' + state.person.lastName,
    loading: state.person.loading,
  }))

  const dispatch = useDispatch()
  const onDecrement = value => dispatch(decrement(value))
  const onIncrement = value => dispatch(increment(value))
  
  useEffect(() => {
    dispatch(loadInitialStateThunk(personId))
  }, [personId, dispatch])

  return (
    <div>
      <input type="number" value={personId} onChange={onPersonChange} max={10} min={1} />
      <p>{personId}) {state.fullName}: {state.counter}</p>
      <Controls increment={onIncrement} decrement={onDecrement} />
      {state.loading 
        ? <p>loading...</p>
        : <PersonInputs />}
    </div>
  )
}

export {App}
