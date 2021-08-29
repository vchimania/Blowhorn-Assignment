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
       <div id="blog" class="card-group card-columns">
  <div class="card">
    <img class="card-img-top" src={i1} alt="Card image cap"/>
    <div class="card-body a">
      <h5 class="card-title title">Refreshing Design</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={i2} alt="Card image cap"/>
    <div class="card-body b">
      <h5 class="card-title title">Healthier Lifestyle</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={i3} alt="Card image cap"/>
    <div class="card-body c">
      <h5 class="card-title title">Gaming Evolution</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>

{/* ----------- */}
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={i6} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Best Workstations of the Year</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={i5} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Eating for Productivity</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top i4" src={i4} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">A Design Mind-Set</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
       </>
    )
}
export default Blog;