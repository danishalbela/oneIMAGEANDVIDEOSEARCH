import React, { useCallback, useState } from 'react'
import Child from './Child'

function Two() {
    let [a,b] = useState(30)
    let [c,d] = useState(50)

    // let calculate = useCallback(()=>{},[dependancy])

    // render on every change only
    let calculate = useCallback(()=>{

    },[])

    // let calculate = useCallback(()=>{

    // },[a])

    // without callback
    // let calculate =()=>{

    // }

  return (
    <div>
        <Child calculate={calculate}/>
        <h1>{a}</h1>
        <button onClick={()=>b(a+1)}>Addition</button>


        <h2>C says {c}</h2>
        <button onClick={()=>d(c+1)}>Addition</button>
    </div>
  )
}

export default Two