import React from 'react'
import { Card } from 'react-bootstrap'

function Videodetails(props) {
  let {videoId} = props
  return (
    <div>
      <Card className='text-center' style={{width:'200%'}}>
        <Card.Body>
          <iframe
          src={`https://www.youtube.com/embed/${videoId}?muted=0`}
          frameborder='1'
          height={'500px'}
          width={'100%'}
          ></iframe>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Videodetails