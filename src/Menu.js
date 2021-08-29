import React from "react";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(
       <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">nullBrains</a>
          
  <div className="collapse navbar-collapse heading ">
    <ul className="navbar-nav mr-auto ">
      <li className="nav-item active">
           <NavLink exact activeClassName="active_class nav-link home" to="/">Home <span className="sr-only">(current)</span></NavLink>
           </li>
           <li className="nav-item">
           <NavLink exact  activeClassName="active_class nav-link features" to="/features">Features</NavLink>
           </li>
           <li className="nav-item">
           <NavLink exact  activeClassName="active_class nav-link blog" to="/blog">Blog</NavLink>
           </li>
           <li className="nav-item">
           <NavLink exact  activeClassName="active_class nav-link content" to="/content">Content</NavLink>
           </li>
           </ul>
           <form className="form-inline my-2 my-lg-0" style={{marginRight: 97}}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div>
      <button className="rounded-pill" style={{backgroundColor:"white",border:"white"}}>Sign In</button>
      <button className="rounded-pill" style={{backgroundColor:"mediumpurple"}}>Sign Up</button>
    </div>
           </div>
           </nav>
          <hr></hr>
       </div>

  
    )
}
export default Menu;