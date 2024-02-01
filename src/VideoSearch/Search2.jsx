import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Search from '../ImgSearch/Search';

function Search2(props) {
    let {search,setSearch} = props
  return (
    <div>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Search Video</InputGroup.Text>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          
          value={search}
          onChange={e=>setSearch(e.target.value)}
        />
        
      </InputGroup>
    </div>
  )
}

export default Search2