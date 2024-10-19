import React from "react";
import {NavLink} from "react-router-dom";
const Banner = (props) =>{
    return(
        <>
       <div className="container nav_bg pd-top" >
            <div className="row">
                <div className="col-md-6 text-align-start">
                    <h1>{props.name}</h1> 
                    <h1>start with us</h1>
                    <p>out cheif manager is here Rahul</p>
                    <NavLink to={props.visit}><button>{props.btnname}</button></NavLink>
                </div>
                <div className="col-md-6">
                    <img  src={props.imgsrc}  className="App-logo" alt="logo" />
                </div>
            </div>
        </div>
      </>
    );
};
export default Banner;