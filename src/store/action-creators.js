import {DEC, INC, EDIT_PERSON, START_LOADING, FINISH_LOADING} from './action-types'

export const decrement = (value) => ({
  type: DEC,
  payload: value,
})

export const increment = (value) => ({
  type: INC,
  payload: value,
})

export const editPerson = (payload) => ({
  type: EDIT_PERSON,
  payload,
})

export const startLoading = () => ({
  type: START_LOADING
})

export const finishLoading = () => ({
  type: FINISH_LOADING
})

export const loadInitialStateThunk = (id) => (dispatch) => {
  dispatch(startLoading())

  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(resp => resp.json())
    .then(user => {
      const [firstName, lastName] = user.name.split(' ')

      dispatch(editPerson({field: 'firstName', value: firstName}))
      dispatch(editPerson({field: 'lastName', value: lastName}))
      dispatch(finishLoading())
    })
    .catch(() => dispatch(finishLoading()))
}
