import React from 'react'

function Child() {

    console.log("Child component")

  return (
    <div>
    </div>
  )
}

export default React.memo(Child)