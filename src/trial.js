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

          

