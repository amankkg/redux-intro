import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editPerson } from './store/action-creators'

const PersonInputs = () => {
  const {firstName, lastName} = useSelector(state => ({
    firstName: state.person.firstName,
    lastName: state.person.lastName,
  }))

  const dispatch = useDispatch()

  const onFirstNameChange = useCallback(
    (e) => {
      const payload = {field: 'firstName', value: e.target.value}
      
      dispatch(editPerson(payload))
    },
    [dispatch]
  )

  const onLastNameChange = useCallback(
    (e) => {
      const payload = {field: 'lastName', value: e.target.value}
      
      dispatch(editPerson(payload))
    },
    [dispatch]
  )

  return (
    <div>
      first name:{' '}
      <input
        value={firstName}
        onChange={onFirstNameChange}
      />
      <br />
      last name:{' '}
      <input
        value={lastName}
        onChange={onLastNameChange}
      />
    </div>
  )
}

export {PersonInputs}