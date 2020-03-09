import React from "react"
import "./style.css"

function FriendCard2(props) {
  const contentClass = props.squareColor.toLowerCase() === "white" ? "cardB" : "cardW"
  console.log("FriendCard2 -> contentClass", contentClass)
  console.log(props)

  return (
    <div className={contentClass}id={props.id} onClick={props.handleClick} key={props.id}>
    {props.id}
      
    </div>
  )
}

export default FriendCard2