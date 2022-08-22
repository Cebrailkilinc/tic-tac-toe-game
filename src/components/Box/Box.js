import { useState } from 'react'
import "./box.css"

function Box(props) { 


  
  return (
    <>
      <div  aria-disabled={true} onClick={props.onClick} className={`box ${props.active}`}>{props.state}</div>
    </>

  )

}


export default Box