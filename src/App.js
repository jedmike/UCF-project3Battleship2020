import React, { useState } from "react"
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
              hit: 'false',
              color: 'cardB',
              cell: 'F'+i,
              // shot: "null",
              // ship: "null"
          });

          squares2.push({
              key: i,
              id:  i,
              ship: 'false',
              color: 'cardW',
              cell: 'DS'+i,
              // shot: "null",
              // ship: "null"
          });
         
          
      }
//#######################################################
        // const [squareColor, setColor] = useState("Blue")
        // const [square2Color,setColor2]= useState("White")
        const [squareHit,setHit]= useState("false")
        const [square2Ship,setShip]= useState("false")
        const [deployFGrid,setDeployFGrid] =useState(squares)
        const [deploySGrid,setDeploySGrid] =useState(squares2)

        
        
        
        const handleClick = e => {
          e.preventDefault()
          // console.log('########################################')
          // console.log(e)
          const string = (e.target.id)
          console.log(string)
          const regx =/^F/gi
          if ((string.match(regx)) == 'F' ){
          const deployFGridCopy =[...deployFGrid]
          console.log([deployFGridCopy])
          // let obj = arr.find(o => o.name === 'string 1');
          const match = deployFGridCopy.find(square => square.cell === string);


          setDeployFGrid(deployFGridCopy)
          console.log(match);
          console.log('Firing');

         }
          else{console.log('Deploying')}
          // console.log(`Color ${squarecolor}`)
       


      }
   
   
    return(
      <Wrapper> 
        <GameGrid>
        <Title>Fire Grid</Title>
       
            {deployFGrid.map(square => (
                <FriendCard
                    id={square.cell}
                    cell={square.cell}
                    key={square.id}
                    hit={square.hit}
                    color={square.color}
                    handleClick={handleClick}
                    
                    
                  />
                ))}
        </GameGrid>
        <Title>Ship Grid</Title>
        <GameGrid>
        
            {deploySGrid.map(square2 => (
                <FriendCard2
                    id={square2.cell}
                    cell={square2.cell}
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
