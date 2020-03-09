import React from "react"
import "./style.css"

function FriendCard(props) {
  const contentClass = props.squareColor === "Teal" ? "cardT" : "cardB"
  // console.log("FriendCard -> contentClass", contentClass)
  // console.log(props.id)

  return (
    <div className={contentClass}id={props.id} onClick={props.setColor}  onClick={props.handleClick} key={props.id}>
    {props.squareColor}
      
    </div>
  )
}

export default FriendCard
