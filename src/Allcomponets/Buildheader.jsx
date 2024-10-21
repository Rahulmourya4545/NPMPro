import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
const Buildheader = (props) =>{
const navigate = useNavigate();
const [newstate , setnewstate] = useState("button1")
const homepage = () =>{
    navigate("/");
}
const [bolleans, setbolleans] = useState(true);
  const activebutton = (actives) => {
    setbolleans(true);
    setnewstate(actives)
  };
  const activebuttonsec = (actives) => {
    setbolleans(false);
    setnewstate(actives)
  };
return(
<>
<header className="sp-byb__header">
    <div className="sp-grid">
      <div className="sp-grid__item">
       
        <button onClick={()=>{activebutton();props.alert(bolleans);}} className="sp-byb__go-home">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" fill="none" viewBox="0 0 10 14">
            <path
                fill="currentColor"
                d="M.625 7.05829c0 .40833.175.75833.46667.99166l6.41666 5.65835c.40834.4083 1.10834.35 1.51667-.0583.40833-.4084.35-1.1084-.05833-1.5167l-.05834-.0583-5.6-4.95838c-.05833-.05833-.05833-.11667 0-.23333l5.6-4.95834c.46667-.40833.525-1.049996.11667-1.516663-.40833-.4666667-1.05-.525-1.51667-.116667L7.45.349954 1.03333 6.00829C.8 6.29995.625 6.64995.625 7.05829Z"
            ></path>
          </svg><span>Store Home</span>
        </button>

        <button className="sp-byb__go-step1">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" fill="none" viewBox="0 0 10 14">
            <path
                fill="currentColor"
                d="M.625 7.05829c0 .40833.175.75833.46667.99166l6.41666 5.65835c.40834.4083 1.10834.35 1.51667-.0583.40833-.4084.35-1.1084-.05833-1.5167l-.05834-.0583-5.6-4.95838c-.05833-.05833-.05833-.11667 0-.23333l5.6-4.95834c.46667-.40833.525-1.049996.11667-1.516663-.40833-.4666667-1.05-.525-1.51667-.116667L7.45.349954 1.03333 6.00829C.8 6.29995.625 6.64995.625 7.05829Z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="sp-grid__item">
        <ul className="sp-byb-steps">
          <li onClick={()=>{activebutton("button1");props.alert(bolleans);}} className={`sp-byb-step ${newstate === "button1" ? "sp-byb-step--active" : ""}`}>
            <button id="step-1">
              <span classNameName="sp-byb-step__number"><span className="sp-byb-step__number">1</span></span
              ><span className="sp-byb-step__title">Choose Size</span>
            </button>
          </li>
          <li  onClick={()=>{activebuttonsec("button2");props.alert(bolleans);}} className={`sp-byb-step ${newstate === "button2" ? "sp-byb-step--active" : ""}`}>
            <button id="step-2">
              <span className="sp-byb-step__number">2</span
              ><span className="sp-byb-step__title">Select Items</span>
            </button>
          </li>
          <li className="sp-byb-step">
            <button>
              <span className="sp-byb-step__number">3</span
              ><span className="sp-byb-step__title">Checkout</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="sp-grid__item">
        <button className="sp-byb__cart-trigger">
          <span className="sp-byb__cart-count"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.84584" d="M12 1.349c2.1546 0 3.6536.10966 5.4551.26892.6866.06068 1.2628.52742 1.5211 1.16041.3259.79848.7087 1.5691 1.0991 2.35549.6053 1.2189 1.2294 2.47566 1.6901 3.93268-.2918-.45873-.7893-.77311-1.36-.81679M12 1.349c-2.17445 0-3.68118.11168-5.50503.27332-.66113.05859-1.2239.49345-1.48726 1.09709-.29282.67119-.62291 1.34237-.95752 2.02275-.67824 1.37911-1.37511 2.7961-1.81826 4.32813.29154-.46079.79014-.77678 1.3624-.82058M12 1.349l-.0001 6.41159m-8.40557.48912c.50523-.03867 1.01498-.08009 1.52895-.12183 2.22093-.18045 4.5208-.36729 6.87662-.36729m-8.40557.48912c2.68841-.20578 5.50457-.48912 8.40557-.48912m-8.40557.48912c-.81847.06266-1.48612.68209-1.61293 1.4856-.27714 1.75629-.6064 3.58789-.6064 5.47049s.32926 3.7142.60642 5.4705c.12679.8035.79457 1.4229 1.61304 1.4856 2.68841.2057 5.50457.4891 8.40554.4891 2.901 0 5.7171-.2834 8.4056-.4891.8184-.0627 1.4863-.6821 1.613-1.4856.2772-1.7563.6065-3.5879.6065-5.4705 0-1.8826-.3293-3.7142-.6065-5.47049-.1267-.80351-.7948-1.42294-1.6132-1.4856m-8.4055-.48912c2.3558 0 4.6556.18684 6.8766.36729.5139.04174 1.0237.08316 1.5289.12183m-8.4055-.48912c2.9009 0 5.717.28334 8.4055.48912m-5.5038 9.87819h3.4642"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
</>
)
}
export default Buildheader 