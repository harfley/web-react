import React from "react";
import {Routes, Route} from 'react-router-dom'

import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import RecentWork from "./components/RecentWork"

class Jalan extends React.Component {
    render(){
        return(
            <Routes>
            <Route exact path="/" Component={Intro}/>
            <Route path="/AboutMe" Component={AboutMe}/>
            <Route path="/Services" Component={Services}/>
            <Route path="/RecentWork" Component={RecentWork}/>
            </Routes>
        )
    }
}
export default Jalan;