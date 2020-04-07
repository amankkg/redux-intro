import React from 'react'

const Controls = ({decrement, increment}) => {
  return (
    <>
      <button onClick={e => decrement(5)}>decrement by 5</button>
      <br />
      <button onClick={e => increment(5)}>increment by 5</button>
      <br />
      <button onClick={e => decrement(25)}>decrement by 25</button>
      <br />
      <button onClick={e => increment(25)}>increment by 25</button>
    </>
  )
}

export {Controls}
