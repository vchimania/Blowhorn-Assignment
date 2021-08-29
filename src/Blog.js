import React from "react";
import i1 from "./images/orange.jpg"
import i2 from "./images/gbc.jpg"
import i3 from "./images/quench-satisfying.jpg"
import i4 from "./images/book-design.jpg";
import i5 from "./images/snacks.jpg"
import i6 from "./images/workstation.jpg"

const Blog=()=>{
    return(
       <>
       <div>
         <h1 style={{padding:30,fontWeight: "bolder",marginLeft: 142}}>The Project Blog</h1>
         <h3 style={{color:"grey",marginLeft: 142}}>Designs and Layout to help you with your app</h3>
       </div>
       <div id="blog" className="card-group card-columns">
  <div className="card">
    <img className="card-img-top" src={i1} aria-hidden alt="card"/>
    <div className="card-body a">
      <h5 className="card-title title">Refreshing Design</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={i2} aria-hidden alt="Card image cap"/>
    <div className="card-body b">
      <h5 className="card-title title">Healthier Lifestyle</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={i3} aria-hidden alt="Card image cap"/>
    <div className="card-body c">
      <h5 className="card-title title">Gaming Evolution</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>

{/* ----------- */}
<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={i6} aria-hidden alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Best Workstations of the Year</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={i5} aria-hidden alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Eating for Productivity</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top i4" src={i4} aria-hidden alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">A Design Mind-Set</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
       </>
    )
}
export default Blog;