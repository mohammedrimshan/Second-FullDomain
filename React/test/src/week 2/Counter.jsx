import React, { useContext } from 'react'
import { CounterContext } from './CounterProvider'
function Counter() {
    const {count,setCount} = useContext(CounterContext)
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
