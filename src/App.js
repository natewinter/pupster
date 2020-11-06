import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./components/pages/Discover";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import NavTabs from "./components/NavTabs";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {

  return <Router>
  <div>
    <NavTabs />
    <Route exact path ="/" component = {About} />
    <Route exact path ="/About" component = {About} />
    <Route exact path ="/Discover" component = {Discover} />
    <Route exact path ="/Search" component = {Search} />
    
  </div>
  </Router>
  function getDogs(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => console.log(response))
  }
}
export default App;
