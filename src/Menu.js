import React from "react";
import {NavLink} from "react-router-dom";
const Menu=()=>{
    return(
        <>
        <ul>
       <li> <NavLink to="/" exact activeClassName="active_class">BLOGS</NavLink></li> 
        <li><NavLink to="/About" exact activeClassName="active_class">ABOUT</NavLink></li> 
 <li><NavLink to="/NewBlog" exact activeClassName="active_class">NEWBLOG</NavLink></li>
        </ul>
        
        </>
    )
}
export default Menu;