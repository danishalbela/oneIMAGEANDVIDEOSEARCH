import React, { useState } from 'react'
import Search2 from './Search2'
import Videolist from './Videolist'
import Videodetails from './Videodetails'

function Main2() 
{
    let [search,setSearch] = useState('')
    let [debounce,setDebounce] = useState(search)
    let [data,setData] = useState([])
    let [VideoId, setVideoId] = useState('')

  return (
    <div >
        <Search2 search={search} setSearch={setSearch}/>

        <div className='d-flex justify-content-between'>
          {
            VideoId ? <Videodetails VideoId = {VideoId}/> :''
          }
        <Videolist 
        search={search}
        debounce={debounce}
        setDebounce={setDebounce} 
        data={data}   
        setData = {setData}
        setVideoId = {setVideoId}
        />

        </div>

    </div>
  )
}

export default Main2