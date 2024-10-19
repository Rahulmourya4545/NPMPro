import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Data from './about';
import Card from './cards';
import React, { useState } from "react";
import Home from "./Home";
import Subscription from './Subscriuption';
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
import Services from './Services';
import Navbar from './Navbar';

function App() {
  const [item, setItem] = useState(Data);
 
   return (
    <div className="App">
    < div className="navbackground"><Navbar /></div>
    <div className="cards_slider">
    
    </div>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/services" Component={Services} />
        <Route exact path='/Subscription' Component={Subscription}/>
      </Routes>

    </div>
  );
}

export default App;
