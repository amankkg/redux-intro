import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { editPerson } from './store/action-creators'

const PersonInputs = ({
  firstName,
  lastName,
  editPerson,
}) => {
  const onFirstNameChange = useCallback(
    (e) => editPerson({field: 'firstName', value: e.target.value}),
    [editPerson]
  )

  const onLastNameChange = useCallback(
    (e) => editPerson({field: 'lastName', value: e.target.value}),
    [editPerson]
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

const mstp = (state,ownProps) => {
  const props = {
    firstName: state.person.firstName,
    lastName: state.person.lastName,
  }

  return props
}

const mdtp = (dispatch, ownProps) => {
  const props = {
    editPerson: payload => dispatch(editPerson(payload))
  }

  return props
}

const ConnectedPersonInputs = connect(mstp, mdtp)(PersonInputs)

export {ConnectedPersonInputs}