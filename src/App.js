import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./bootswatch.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";


function App() {

return (

  <div>
    <Router>
      <NavBar/>
      <Route exact path ="/" component={AboutMe}/>
      {/* <Route exact path ="/Contact" component={Contact}/> */}
      <Route exact path ="/Portfolio" component={Portfolio}/>
    </Router>
  </div>

)};

export default App;
