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

export const loadInitialStateThunk = (personId) => async (dispatch) => {
  dispatch(startLoading())

  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${personId}`)
    const user = await resp.json()

    const [firstName, lastName] = user.name.split(' ')

    dispatch(editPerson({field: 'firstName', value: firstName}))
    dispatch(editPerson({field: 'lastName', value: lastName}))
    dispatch(finishLoading())
  } catch (error) {
    dispatch(finishLoading())
  }
}
