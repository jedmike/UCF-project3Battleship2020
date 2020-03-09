import React from "react"
import "./style.css"

function FriendCard(props) {
  const contentClass = props.squareColor.toLowerCase() === "white" ? "cardW" : "cardB"
  console.log("FriendCard -> contentClass", contentClass)
  console.log(props)

  return (
    <div className={contentClass}id={props.id} onClick={props.handleClick} key={props.id}>
    {props.id}
      
    </div>
  )
}

export default FriendCard
