import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import SQ from "./components/SQ";
import CardBtn from "./components/CardBtn";
import BSlanding from "./pages/BSLanding";
// import BSGameBoard from "./pages/BSGameBoard";
// console.log('got to 1');
function App() {
  return (
    <Router>
      <div>
        {/* <Wrapper> */}
          <Route exact path="/" component={BSlanding} />
          {/* <Route exact path="/BSGameBoard" component={BSGameBoard} /> */}
        {/* </Wrapper> */}
        
      </div>
    </Router>
  );
}

export default App;
