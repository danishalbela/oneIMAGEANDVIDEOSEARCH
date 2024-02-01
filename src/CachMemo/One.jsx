import React, { useMemo, useState } from 'react'

function One() {
    let [count, setCount] = useState(0)
    let [counttwo, setCountTwo] = useState(51)

    const incone=()=>{
        setCount(count+1)
    }

    const inctwo=()=>{
        setCountTwo(counttwo+1)
    }
//    const isEven = useMemo(()=>{},dependancy)
    let isEven = useMemo(()=>{
        let i = 0
        while(i<200000000) i++
        return count % 2 === 0
    },[count])
  

  return (
    <div>
       <h1>Count state = {count}</h1>
       <h3>count Even = { isEven ? 'Even':'Odd'} </h3>
       <button onClick={incone}>IncCount</button>

       <h1>setCount state = {counttwo}</h1>     
       <button onClick={inctwo}>IncCountTwo</button>
    </div>
  )
}

export default One