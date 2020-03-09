
const squares = [];
const numSq= 12
const rows= [];
for (let i = 0; i < numSq; i++) {
   
    squares.push({
        key: i,
        id: "fs"+ i,
        color: "white",
        shot: "null",
        ship: "null"
    });
    rows.push({
      id: i});
    console.log([rows])
}


