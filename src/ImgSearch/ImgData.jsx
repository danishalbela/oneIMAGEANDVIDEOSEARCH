import React from 'react'

function ImgData(props) {
  let {data}  = props
  return (
    <div>
     {
      data.map((ele,index)=>{
        return <img src={ele.urls.small} alt="" />
      })
     }
    </div>
  )
}

export default ImgData