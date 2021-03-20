import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./bootswatch.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";


function App() {

return (

  <div>
    <Router>
      <NavBar/>
      <Header/>
      <Route exact path ="/" component={AboutMe}/>
      <Route exact path ="/portfolio" component={Portfolio}/>
    </Router>
    <Footer/>
  </div>

)};

export default App;
