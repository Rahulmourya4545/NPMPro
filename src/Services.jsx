import React from "react";
import Card from './cards';
import Data from './about';
import { useState } from "react";
const Services = () =>{
   const [item, setItem] = useState(Data);
    return(
        <>
        <Card item={item} />
      </>
    );
};
export default Services;