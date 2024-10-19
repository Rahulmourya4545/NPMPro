import React from "react";
import logo from './logo.svg';
import Banner from "./Allcomponets/Banner";

const App = () =>{

    return(
        <>
       <div className="home_banner_section">
       <Banner name='Welcome Bussines carirer' imgsrc={logo} visit="/contact" btnname="contact now" />
       </div>
     
       </>
    );
};
export default App;