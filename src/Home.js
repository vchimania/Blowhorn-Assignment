import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import Boost from "./Boost";
import Content from "./Content";
import images from "./data/Images";
import Features from "./Features";

const Home=()=>{
    return(
        <>
       <div>
          <h6 className="" style={{fontSize:100,textAlign:"center"}}>Start Crafting Your</h6><br></br>
          <h5 style={{color: "rgb(77, 77, 145)",fontSize:80,textAlign:"center" }}>Next Great Idea</h5>
          </div>
          <div style={{textAlign: "center",color: "gray",fontSize: "x-large"}}>
       <p>Simplify the creation of landing pages, blog pages,<br/>application pages and so much more!</p><br></br>
       <button className="rounded-pill" style={{backgroundColor:"mediumpurple"}}>Purchase Now</button>
       <p>Learn More</p>
       </div>
       <div className="text-center" style={{padding: 57}}>
           <h4>Trusted By Top Leading Companies</h4>
           <div className="icons">
           { images.map(({id, src}) => 
           <img  key={id} src={src} alt="Not coming"/>)}
           </div>
       </div>
       <Boost/>
       <Features/>
       <Blog/>
       <Content/>
      </>
    )
}
export default Home;