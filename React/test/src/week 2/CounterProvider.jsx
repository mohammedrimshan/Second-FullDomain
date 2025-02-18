import React,{createContext,useState} from 'react'

export const CounterContext = createContext()

function CounterProvider({children}) {
    const [count,setCount] = useState(0)
  return (
    <div>
      <CounterContext.Provider value={{count,setCount}}>
        {children}
      </CounterContext.Provider>
    </div>
  )
}

export default CounterProvider
