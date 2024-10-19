import React, { useState } from "react";
import Product from "./Allcomponets/Products";


const Subscription = () =>{
const[active,Setactive] = useState('button2')
const[attributesvalue ,Setattributesvalue] = useState('10')
const optionbuttons = (buttonId,attributes) =>{
  Setactive(buttonId)
  Setattributesvalue(attributes)
}
console.log(attributesvalue)
    return(
        <main className="sp-byb__main" id="step-1">
        <div className="sp-byb__size">
          <ul className="sp-byb__size-head">
            <li>
              <img src="//www.naturalstacks.com/cdn/shop/files/thumb-1_200x.png?v=1721647210" alt="" aria-hidden="true" width="72" height="72" loading="lazy"/>
            </li>
            <li>
              <img src="//www.naturalstacks.com/cdn/shop/files/thumb-2_200x.png?v=1721647222" alt="" aria-hidden="true" width="72" height="72" loading="lazy"/>
            </li>
            <li>
              <img src="//www.naturalstacks.com/cdn/shop/files/thumb-3_200x.png?v=1721647236" alt="" aria-hidden="true" width="72" height="72" loading="lazy"/>
            </li>
          </ul>
          <h1>BUILD YOUR SUBSCRIPTION BUNDLE</h1>
          <ul className="sp-byb__benefits">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25202" d="m2 8.70242 3.89962 4.02148C7.73464 7.4527 9.26286 5.13965 12.724 2"></path>
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25202" d="m2 8.70242 3.89962 4.02148C7.73464 7.4527 9.26286 5.13965 12.724 2" opacity=".1"></path>
              </svg>
              <span>3rd Party Lab Tested</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25202" d="m2 8.70242 3.89962 4.02148C7.73464 7.4527 9.26286 5.13965 12.724 2"></path>
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25202" d="m2 8.70242 3.89962 4.02148C7.73464 7.4527 9.26286 5.13965 12.724 2" opacity=".1"></path>
              </svg>
              <span>Targeted and Transparent Formulas</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25202" d="m2 8.70242 3.89962 4.02148C7.73464 7.4527 9.26286 5.13965 12.724 2"></path>
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25202" d="m2 8.70242 3.89962 4.02148C7.73464 7.4527 9.26286 5.13965 12.724 2" opacity=".1"></path>
              </svg>
              <span>4712+ 5 Star Reviews</span>
            </li>
          </ul>
          <ul className="sp-byb__options">
            <li  data-num="5" className={active ==='button1' ? 'active-buttons' : '' } onClick={(e)=>{optionbuttons('button1',e.target.getAttribute('data-num'))}}>
              <button className="sp-byb__option" fdprocessedid="9vaptb">
                <span className="sp-byb__option-secondary"><span className="sp-byb__option-discount">10% off </span></span>
                <span className="sp-byb__option-primary">
                  <span className="sp-byb__option-items" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                      <path fill="currentColor" fill-rule="evenodd" d="M.5 14.0005C.5 6.54465 6.54416.500488 14 .500488c7.4558 0 13.5 6.044162 13.5 13.500012 0 7.4558-6.0442 13.5-13.5 13.5-7.45584 0-13.5-6.0442-13.5-13.5Zm19.3398-4.07419c.5114-.46384.5498-1.25436.086-1.76566-.4638-.51132-1.2543-.54982-1.7656-.08598-1.6615 1.5072-2.9096 2.86173-3.9631 4.50613-.7673 1.1975-1.4132 2.5206-2.0456 4.124l-2.25412-2.3245c-.4806-.4956-1.27196-.5078-1.76756-.0272-.4956.4806-.50778 1.272-.0272 1.7676l3.63638 3.75c.3019.3114.7436.444 1.1671.3504.4235-.0936.7682-.4001.9108-.8097.8405-2.4143 1.5866-4.0794 2.4852-5.482.8936-1.3948 1.9718-2.5826 3.5377-4.00309Z" clip-rule="evenodd"></path>
                    </svg>
                    5 Items
                  </span>
                </span>
              </button>
            </li>
            <li data-num="10" className={active ==='button2' ? 'active-buttons' : '' }  onClick={(e)=>{optionbuttons('button2',e.target.getAttribute('data-num'))}}>
              <button  className="sp-byb__option sp-byb__option--selected" fdprocessedid="ektvgc">
                <span className="sp-byb__option-secondary"><span className="sp-byb__option-discount">15% off </span></span>
                <span className="sp-byb__option-primary">
                  <span className="sp-byb__option-items" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                      <path fill="currentColor" fill-rule="evenodd" d="M.5 14.0005C.5 6.54465 6.54416.500488 14 .500488c7.4558 0 13.5 6.044162 13.5 13.500012 0 7.4558-6.0442 13.5-13.5 13.5-7.45584 0-13.5-6.0442-13.5-13.5Zm19.3398-4.07419c.5114-.46384.5498-1.25436.086-1.76566-.4638-.51132-1.2543-.54982-1.7656-.08598-1.6615 1.5072-2.9096 2.86173-3.9631 4.50613-.7673 1.1975-1.4132 2.5206-2.0456 4.124l-2.25412-2.3245c-.4806-.4956-1.27196-.5078-1.76756-.0272-.4956.4806-.50778 1.272-.0272 1.7676l3.63638 3.75c.3019.3114.7436.444 1.1671.3504.4235-.0936.7682-.4001.9108-.8097.8405-2.4143 1.5866-4.0794 2.4852-5.482.8936-1.3948 1.9718-2.5826 3.5377-4.00309Z" clip-rule="evenodd"></path>
                    </svg>
                    10 Items
                  </span>
                </span>
              </button>
            </li>
            <li  data-num="14"  className={active ==='button3' ? 'active-buttons' : '' }  onClick={(e)=>{optionbuttons('button3',e.target.getAttribute('data-num'))}}>
              <button  className="sp-byb__option sp-byb__option--selected" fdprocessedid="ektvgc">
                <span className="sp-byb__option-secondary"><span className="sp-byb__option-discount">15% off </span></span>
                <span className="sp-byb__option-primary">
                  <span className="sp-byb__option-items" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28">
                      <path fill="currentColor" fill-rule="evenodd" d="M.5 14.0005C.5 6.54465 6.54416.500488 14 .500488c7.4558 0 13.5 6.044162 13.5 13.500012 0 7.4558-6.0442 13.5-13.5 13.5-7.45584 0-13.5-6.0442-13.5-13.5Zm19.3398-4.07419c.5114-.46384.5498-1.25436.086-1.76566-.4638-.51132-1.2543-.54982-1.7656-.08598-1.6615 1.5072-2.9096 2.86173-3.9631 4.50613-.7673 1.1975-1.4132 2.5206-2.0456 4.124l-2.25412-2.3245c-.4806-.4956-1.27196-.5078-1.76756-.0272-.4956.4806-.50778 1.272-.0272 1.7676l3.63638 3.75c.3019.3114.7436.444 1.1671.3504.4235-.0936.7682-.4001.9108-.8097.8405-2.4143 1.5866-4.0794 2.4852-5.482.8936-1.3948 1.9718-2.5826 3.5377-4.00309Z" clip-rule="evenodd"></path>
                    </svg>
                    14+ Items
                  </span>
                </span>
              </button>
            </li>
          </ul>
          {/* <div className="sp-byb__frequency">
            <div className="sp-byb__frequency-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" clip-path="url(#frequencyIcon)"><path d="M15.647 1.93A10.69 10.69 0 0 1 12 22.7"></path><path d="m16.313 4.094-.665-2.164 2.102-.711M8.353 22.07A10.69 10.69 0 0 1 12 1.3"></path><path d="m7.688 19.906.665 2.164-2.103.711"></path></g><defs><clipPath id="frequencyIcon"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs>
              </svg>
              <span>Deliver every</span>
            </div>
            <ul className="sp-byb__monthly">
              <li className="active-buttons">
                <button className="sp-byb__option" fdprocessedid="ytvb6">
                  <span className="sp-byb__option-primary">
                    <span className="sp-byb__option-items" mnth="Every 1 month">
                      <svg className="circle-outline" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="13.5" stroke="black" stroke-opacity="0.2"></circle>
                      </svg>
                      <svg className="circle-filled-outline" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" style={{display:"none"}}>
                        <path fill="currentColor" fill-rule="evenodd" d="M.5 14.0005C.5 6.54465 6.54416.500488 14 .500488c7.4558 0 13.5 6.044162 13.5 13.500012 0 7.4558-6.0442 13.5-13.5 13.5-7.45584 0-13.5-6.0442-13.5-13.5Zm19.3398-4.07419c.5114-.46384.5498-1.25436.086-1.76566-.4638-.51132-1.2543-.54982-1.7656-.08598-1.6615 1.5072-2.9096 2.86173-3.9631 4.50613-.7673 1.1975-1.4132 2.5206-2.0456 4.124l-2.25412-2.3245c-.4806-.4956-1.27196-.5078-1.76756-.0272-.4956.4806-.50778 1.272-.0272 1.7676l3.63638 3.75c.3019.3114.7436.444 1.1671.3504.4235-.0936.7682-.4001.9108-.8097.8405-2.4143 1.5866-4.0794 2.4852-5.482.8936-1.3948 1.9718-2.5826 3.5377-4.00309Z" clip-rule="evenodd"></path>
                      </svg>
                      Every 1 month</span>
                  </span>
                </button>
              </li>
              <li>
                <button className="sp-byb__option sp-byb__option--selected" fdprocessedid="s2wy5e">
                  <span className="sp-byb__option-primary">
                    <span className="sp-byb__option-items" mnth="Every 2 months">
                      <svg className="circle-outline" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="13.5" stroke="black" stroke-opacity="0.2"></circle>
                      </svg>
                      <svg className="circle-filled-outline" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" style={{display:"none"}}>
                        <path fill="currentColor" fill-rule="evenodd" d="M.5 14.0005C.5 6.54465 6.54416.500488 14 .500488c7.4558 0 13.5 6.044162 13.5 13.500012 0 7.4558-6.0442 13.5-13.5 13.5-7.45584 0-13.5-6.0442-13.5-13.5Zm19.3398-4.07419c.5114-.46384.5498-1.25436.086-1.76566-.4638-.51132-1.2543-.54982-1.7656-.08598-1.6615 1.5072-2.9096 2.86173-3.9631 4.50613-.7673 1.1975-1.4132 2.5206-2.0456 4.124l-2.25412-2.3245c-.4806-.4956-1.27196-.5078-1.76756-.0272-.4956.4806-.50778 1.272-.0272 1.7676l3.63638 3.75c.3019.3114.7436.444 1.1671.3504.4235-.0936.7682-.4001.9108-.8097.8405-2.4143 1.5866-4.0794 2.4852-5.482.8936-1.3948 1.9718-2.5826 3.5377-4.00309Z" clip-rule="evenodd"></path>
                      </svg>
                      Every 2 months
                    </span>
                  </span>
                </button>
              </li>
              <li>
                <button className="sp-byb__option sp-byb__option--selected" fdprocessedid="j5aomzc">
                  <span className="sp-byb__option-primary">
                    <span className="sp-byb__option-items" mnth="Every 3 months">
                      <svg className="circle-outline" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14" cy="14" r="13.5" stroke="black" stroke-opacity="0.2"></circle>
                      </svg>
                      <svg className="circle-filled-outline" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 28 28" style={{display:"none"}}>
                        <path fill="currentColor" fill-rule="evenodd" d="M.5 14.0005C.5 6.54465 6.54416.500488 14 .500488c7.4558 0 13.5 6.044162 13.5 13.500012 0 7.4558-6.0442 13.5-13.5 13.5-7.45584 0-13.5-6.0442-13.5-13.5Zm19.3398-4.07419c.5114-.46384.5498-1.25436.086-1.76566-.4638-.51132-1.2543-.54982-1.7656-.08598-1.6615 1.5072-2.9096 2.86173-3.9631 4.50613-.7673 1.1975-1.4132 2.5206-2.0456 4.124l-2.25412-2.3245c-.4806-.4956-1.27196-.5078-1.76756-.0272-.4956.4806-.50778 1.272-.0272 1.7676l3.63638 3.75c.3019.3114.7436.444 1.1671.3504.4235-.0936.7682-.4001.9108-.8097.8405-2.4143 1.5866-4.0794 2.4852-5.482.8936-1.3948 1.9718-2.5826 3.5377-4.00309Z" clip-rule="evenodd"></path>
                      </svg>
                      Every 3 months
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </div> */}
          <button className="sp-byb__cta" fdprocessedid="kzazb8">Next Step</button>
        </div>
        <Product/>
      </main>
     
    )
}
export default Subscription;
