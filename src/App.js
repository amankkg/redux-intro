import React from 'react'
import {connect} from 'react-redux'
import { decrement, increment } from './state'
import { Controls } from './controls'
import { ConnectedPersonInputs } from './person-inputs'

const AppComponent = (props) => {
  const counter = props.counter
  const fullName = props.fullName
  const increment = props.increment
  const decrement = props.decrement

  return (
    <div>
      <p>{fullName}: {counter}</p>
      <Controls increment={increment} decrement={decrement} />
      <ConnectedPersonInputs />
    </div>
  )
}

const mapStateToProps = state => {
  const props = {
    counter: state.counter,
    fullName: state.person.firstName + ' ' + state.person.lastName,
  }

  return props
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const props = {
    decrement: value => dispatch(decrement(value)),
    increment: value => dispatch(increment(value)),
  }

  return props
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent)

export {App}
