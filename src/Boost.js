import React from "react";
import img1 from "./images/productivity.png"
import img2 from "./images/settings.png"


const Boost=()=>{
    return(
        <>
        <div className="d-md-flex h-md-100 align-items-center">
            
    {/* <!-- First Half --> */}
    <div className="col-md-6 p-0 bg-indigo">
        <div className="text-white d-md-flex align-items-center h-100  text-center justify-content-center">
            <div className="logoarea pt-5 pb-5 ">
            <img className= "product" src={img1} alt="logo"/>
            </div>
        </div>
    </div>

    {/* <!-- Second Half --> */}
    <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
        <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
           <p>Productivity is the efficiency of production of goods or services expressed by some measure. Measurements of productivity are often expressed as a ratio of an aggregate output to a single input or an aggregate input used in a production process, i.e. output per unit of input, typically over a specific period of time.[1] The most common example is the (aggregate) labour productivity measure, e.g., such as GDP per worker. </p>
        </div>
    </div>
        
</div>

<div className="d-md-flex h-md-100 align-items-center">
            {/* <!-- Second Half --> */}
            <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
                <div className="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                Almost every organization needs to gather institutional knowledge, collate material from multiple sources, and share experiences and insights. And many companies achieve this by using wikis – web pages that can be worked on by multiple users.
                But are wikis the best way to keep your information accessible and up-to-date? With a vast array of data-management and communication products now available, businesses have to choose their tools carefully. Wikis have moved on, too, giving organizations fresh options and new decisions to make.
                </div>
            </div>

            {/* <!-- First Half --> */}
            <div className="col-md-6 p-0 bg-indigo h-md-100">
                <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                    <div className="logoarea pt-5 pb-5">
                    <img className= "product" src={img2} alt="logo"/>
                    </div>
                </div>
            </div>
                
        </div>
</>

    )
}

export default Boost;