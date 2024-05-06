import React from "react";
import { useState } from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import AddDeck from "./pages/AddDeck";
import { useSelector } from 'react-redux';


const App = () => {

  const[userID, setUserID] = useState("7KmIAaU1E2b3SXpQQl3C");
  const deckID = useSelector(state => state.deckid);
  const deckName = useSelector(state => state.deckname);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home userID={userID} />}/>
        <Route path="/learn/" element={<Learn deckID={deckID} deckName={deckName}/>}/>
        <Route path="/addDeck" element={<AddDeck userID={userID}/>}/>
      </Routes>    
    </BrowserRouter>  
    
  );
}


export default App;
