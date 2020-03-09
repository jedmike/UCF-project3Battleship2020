import React, { useState, useContext } from "react"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import FriendCard from "./components/FriendCard"
import FriendCard2 from "./components/FriendCard2"
import GameGrid from "./components/GameGrid"

function App() {
 
    //#######################################################
      
      const squares= [];
      const squares2=[];
      const grid = 12;
      const numSq= grid*grid;
     

      for (let i = 0; i < numSq; i++) {
          
          squares.push({
              key: i,
              id:  i,
              color: "white",
              cell: 'F'+i,
              // shot: "null",
              // ship: "null"
          });

          squares2.push({
              key: i,
              id:  i,
              color: "white",
              cell: 'DS'+i,
              // shot: "null",
              // ship: "null"
          });
         
          
      }
//#######################################################
        const [squareColor, setColor] = useState("Blue")
        const [square2Color,setColor2]= useState("White")

        const handleClick = e => {
          e.preventDefault()
          console.log(e.target.id)
          if ((e.target.id.replace( /^\D+/g, '')) % 2 === 0){
          e.target.style.background = 'red'}
          else{e.target.style.background = 'green'}
          console.log(`Color ${squareColor}`)

          setColor2(squareColor === "White" ? "White" : "White")
          setColor(square2Color === "White" ? "Blue" : "White")
      }

        
    return (
      <Wrapper>
      <Title>Firing Grid</Title>
        <GameGrid>
            {squares.map(square => (
                <FriendCard
                    id={square.cell}
                    key={square.id}
                    cell={square.cell}
                    color={square.color}
                    handleClick={handleClick}
                    squareColor={squareColor}
                    
                  />
                ))}
        </GameGrid>
        <Title>Ship Grid</Title>
        <GameGrid>
        
            {squares2.map(square2 => (
                <FriendCard2
                    id={square2.cell}
                    key={square2.id}
                    // cell={square2.cell}
                    color={square2.color}
                    handleClick={handleClick}
                    squareColor={squareColor}
                    
                  />
                ))}
        </GameGrid>
      </Wrapper>
    );
  }

  
export default App
