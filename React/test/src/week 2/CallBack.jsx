import React, { useCallback, useMemo, useState } from 'react'

export default function CallBack() {
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)

    const incOne = useCallback(()=>[
        setCountOne((prevOne)=>prevOne+1)
    ],[])

    const incTwo = useCallback(()=>{
        setCountTwo((prevTwo)=>prevTwo+1)
    },[])

    const isEven = useMemo(()=>{
        let i = 0;
        while(i<2000000000) i++
        return countOne%2 === 0;
    },[countOne])

  return (
    <div>
      <button onClick={incOne}>Count One:{countOne}</button>
      <br />
      <span>{isEven?"Even":"Odd"}</span>
      <br/><br/>
      <button onClick={incTwo}>Count Two:{countTwo}</button>
    </div>
  )
}
