import React from "react";
import NavBar from "./components/Navbar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action,originals } from "./components/urls";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action Movies' isSmall url={action}/>
      
    </div>
  );
}

export default App;
