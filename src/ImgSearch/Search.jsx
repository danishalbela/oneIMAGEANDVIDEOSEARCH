import React from 'react'

function Search(props) {
    // console.log(props);
    let {term,setTerm} = props
  return (
    <div>
    <form>
    <input
        type='text'
        id=''
        name=''
        placeholder='Search Images'
        value={term}
        onChange={(e)=>setTerm(e.target.value)}
    />
    </form>
    </div>
  )
}

export default Search