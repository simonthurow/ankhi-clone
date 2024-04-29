import React from "react";
import { useState } from "react";
import { BrowserRouter , Route, Routes, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import AddDeck from "./pages/AddDeck";


const App = () => {

  const[userID, setUserID] = useState("7KmIAaU1E2b3SXpQQl3C");
  const[deckID, setDeckID] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userID={userID} />}/>
        <Route path="/learn" element={<Learn deckID={deckID}/>}/>
        <Route path="/addDeck" element={<AddDeck userID={userID}/>}/>
      </Routes>    
    </BrowserRouter>  
  );
}


export default App;
