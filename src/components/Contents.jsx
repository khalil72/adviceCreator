import React, { useState } from 'react'
import { Card } from 'react-bootstrap'


const Contents = ({slipData ,  apiGet}) => {
  
    
  return (
    <div>
        <h5 className='fs-6 fw-bold mb-4 '> <i>{slipData?.advice}</i></h5>
        <button className='button p-2 d-flex mx-auto' onClick={apiGet}>
          <span>GIVE ME ADVICE!</span>
        </button>
    </div>
  )
}

export default Contents