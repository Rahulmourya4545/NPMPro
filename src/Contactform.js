import React, { useState } from "react";
const Fromhere = (props) =>{

const [newtext, setnewtext] = useState ("");
const chnagehandler = (event) =>{
setnewtext(event.target.value);
console.log(newtext);
}
const [amount , setnewamount] = useState("");




return(
    <>
    <form>
        <div className="formconatiner>">
            <div className="new-expense">
                <label>title</label>
                <input  type="text" value={newtext} onChange={chnagehandler}/>
            </div>
            <div className="new-expense">
                <label>Amount</label>
                <input type="number" min="0.01"value={amount}/>
            </div>
            <div className="new-expense">
                <label>Date</label>
                <input type="date"/>
            </div>
        </div>
        <div className="Neeeqqw">
        <button type="submit">submit</button>
        </div>
       
    </form>
    </>
);
}
export default Fromhere;