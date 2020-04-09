import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { decrement, increment, loadInitialStateThunk } from './store/action-creators'
import { Controls } from './controls'
import { ConnectedPersonInputs } from './person-inputs'

const AppComponent = ({
  counter,
  fullName,
  increment,
  decrement,
  load,
  loading,
}) => {
  useEffect(() => { load() }, [])

  return (
    <div>
      <p>{fullName}: {counter}</p>
      <Controls increment={increment} decrement={decrement} />
      {loading 
        ? <p>loading...</p>
        : <ConnectedPersonInputs />}
    </div>
  )
}

const mapStateToProps = state => {
  const props = {
    counter: state.counter,
    fullName: state.person.firstName + ' ' + state.person.lastName,
    loading: state.person.loading,
  }

  return props
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const props = {
    decrement: value => dispatch(decrement(value)),
    increment: value => dispatch(increment(value)),
    load: () => dispatch(loadInitialStateThunk(1))
  }

  return props
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent)

export {App}
