import React from "react";
import {Switch,Route} from "react-router-dom";
import About from "./About";
import Blogs from "./Blogs";
import NewBlog from "./NewBlog";
import Menu from "./Menu";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
const App =()=>{
  return(<>
  
  <div className ="nav">
  <div className ="heading"><h1>MUZAMMIL AHMED CODE</h1></div>
    <div className="menu"><Menu/></div>
    </div>
    <Switch>
    <Route exact path="/" component={Blogs}/>
    <Route exact path="/About" component={About}/>
    <Route path="/NewBlog" component={NewBlog}/>
    </Switch>
  </>);
}
export default App;
