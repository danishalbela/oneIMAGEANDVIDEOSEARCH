import React, { useEffect, useState } from 'react'
import Search from './Search'
import ImgData from './ImgData'
import axios from 'axios'

function Main() {
    let [term,setTerm]=useState('')
    let [debounce,setDebounce] = useState(term)
    let [data,setData] = useState([])


    let accessKey = 'p0Yo4d2jaEWQDFppwMZOxO8rxZuZ7splPn4h9Kd0Gzs'

    useEffect(()=>{
           let timeId = setTimeout(()=>{
             setDebounce(term)
           },3000);
           return ()=>{
            clearTimeout(timeId)
           }
    },[term])

    //  console.log('term',term)
    //  console.log('debounce',debounce)


   useEffect(()=>{
    let search = async()=>{
        let response = await axios
        .get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${debounce}`)
        .then(response=>setData(response?.data?.results))
        .catch(err=>console.log(err))
    }  
    if(debounce)
    {
        search()
    }
   },[debounce])

  return (
    <div>
    <Search term={term} setTerm={setTerm}/>
    <ImgData data={data}/>
    </div>
  )
}

export default Main