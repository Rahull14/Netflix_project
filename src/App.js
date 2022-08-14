import React from "react"
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Orginals,Action,Horror,Comedy,Romance, Documentaries} from "./urls"

function App() {
  return (
    <div className="App">
          <NavBar/>
          <Banner/>
          <RowPost url={Orginals} title="Netflix Orginals"/>
          <RowPost url={Action} title="Action" isSmall/>
          <RowPost url={Horror} title="Horror" isSmall/>
          <RowPost url={Comedy} title="Comedy" isSmall/>
          <RowPost url={Romance} title="Romance" isSmall/>
          <RowPost url={Documentaries} title="Documentaries" isSmall/>
          
    </div>
  );
}

export default App;
