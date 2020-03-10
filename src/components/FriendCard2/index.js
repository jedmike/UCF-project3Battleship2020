import React from "react"
import "./style.css"

function FriendCard2(props) {
   const contentClass = props.color 
  // console.log("FriendCard2 -> contentClass", contentClass)
  // console.log('^^^^^^^^^^^^^^^^^^^')
  // console.log(props.id)

  return (
    <div className={contentClass}id={props.id} onClick={props.handleClick} key={props.id}>
    {props.id}
      
    </div>
  )
}

export default FriendCard2
