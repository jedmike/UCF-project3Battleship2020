import React from "react";
import "./style.css";

function SQ(props) {
     const contentClass = props.squareColor.toLowerCase() === "white" ? "cardW" : "cardB"
  console.log("FriendCard -> contentClass", contentClass)

  return (
    <div>
    {/* // <div className={contentClass}id={props.id} onClick={props.handleClick} key={props.id}> */}
SQ
     
    </div>
  )
}

  


export default SQ;