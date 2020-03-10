import React from "react"
import "./style.css"

function FriendCard(props) {
  const contentClass = props.color 
  console.log('ComponentF passed:'+ props.color)
  // console.log("FriendCard -> contentClass", contentClass)
  // console.log("********")
  // console.log(props.color)

  return (
    <div className={contentClass}id={props.id}  onClick={props.handleClick} key={props.id}>
    {props.color}
      
    </div>
  )
}

export default FriendCard
