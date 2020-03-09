import React, { useState, useContext } from "react"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"
import FriendCard from "./components/FriendCard"
import FriendCard2 from "./components/FriendCard2"
import GameGrid from "./components/GameGrid"

function App() {
 
    //#######################################################
      const [deployGrid, setDeployGrid] = useState([])
      const [fireGrid, setFireGrid] = useState([])
      // const squares= [];
      // const squares2=[];
      const grid = 12;
      const numSq= grid*grid;
     

      for (let i = 0; i < numSq; i++) {
          setDeployGrid ([...deployGrid,
          {
              key: i,
              id:  i,
              hit: 'false',
              color: "white",
              cell: 'F'+i,
              // shot: "null",
              // ship: "null"
          }]);

          
          setFireGrid ([...fireGrid,
          {
              key: i,
              id:  i,
              hit: 'false',
              color: "white",
              cell: 'F'+i,
              // shot: "null",
              // ship: "null"
          }]);
         
          
      }
//#######################################################
        // const [squareColor, setColor] = useState("Blue")
        // const [square2Color,setColor2]= useState("White")
        // const [squareHit,setHit]= useState("false")
        // const [square2Ship,setShip]= useState("false")

        
        
        
        const handleClick = e => {
          e.preventDefault()
          console.log(e.target.id)
        //   // if ((e.target.id.replace( /^\D+/g, '')) % 2 === 0){
        //   // e.target.style.background = 'red';
        //   // // setColor(squareColor ='red')
        //  }
        //   else{e.target.style.background = 'green'}
        //   console.log(`Color ${squareColor}`)
          // setColor2(squareColor === "White")
          // setColor(square2Color === "Blue" )
          // setShip(square2Ship === 'false')
          // setHit(squareHit=== 'false')


      }

        
    return (
      <Wrapper>
      <Title>Firing Grid</Title>
        <GameGrid>
            {deployGrid.map(square => (
                <FriendCard
                    id={square.cell}
                    key={square.id}
                    hit={square.hit}
                    color={square.color}
                    handleClick={handleClick}
                    
                    
                  />
                ))}
        </GameGrid>
        <Title>Ship Grid</Title>
        <GameGrid>
        
            {fireGrid.map(square2 => (
                <FriendCard2
                    id={square2.cell}
                    key={square2.id}
                    ship={square2.ship}
                    color={square2.color}
                    handleClick={handleClick}
                    
                    
                  />
                ))}
        </GameGrid>
      </Wrapper>
    );
  }

  
export default App
