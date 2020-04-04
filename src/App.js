import React from 'react'
import {connect} from 'react-redux'

const AppComponent = (props) => {
  const counter = props.counter
  const fullName = props.fullName

  return <p>{fullName}: {counter}</p>
}

const mapStateToProps = state => {
  const props = {
    counter: state.counter,
    fullName: state.person.firstName + ' ' + state.person.lastName,
  }

  return props
}

const App = connect(mapStateToProps)(AppComponent)

export {App}

// TESTS
const state0 = {counter: 42, person: {firstName: 'John', lastName: 'Doe'}}
const expectedProps = {counter: 42, fullName: 'John Doe'}

console.log(mapStateToProps(state0).counter === expectedProps.counter)
console.log(mapStateToProps(state0).fullName === expectedProps.fullName)