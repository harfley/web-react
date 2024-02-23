import React from "react";
import Header from "./components/Navbar"
import Jalan from "./Utama";
// import Intro from "./components/Intro"


import "../src/App.css"
class App extends React.Component {
  render () {
  return (
    <div> 

     <Header />   
     <Jalan/>
     {/* <Intro /> */}

    </div>
  );
    }
}

export default App;
