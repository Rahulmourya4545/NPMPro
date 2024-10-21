import React, { useState } from "react";
import Product from "./Allcomponets/Products";
import Buildbox from "./Allcomponets/Buildboxes";
import Buildheader from "./Allcomponets/Buildheader"
const Subscription = () => {
const[hodediv , sethidediv] = useState();
  function parentalert (data) {
    sethidediv(data)
   }
  return (
   <>
    <Buildheader  alert={parentalert} />
    <main className="sp-byb__main" id="step-1">
      {hodediv ? ( 
        <Product />
      ) : (
        <Buildbox alert={parentalert} />
      )}
      
     
    </main>
    </>
  );
};
export default Subscription;
