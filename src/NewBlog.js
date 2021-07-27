import React from "react";
const NewBlog=()=>{
    return(
        <><div className ="bg1">
        <div className ="heading"><h1>Its my new Blog</h1></div>
        <div className="container">
 <div className="row">
   <div className="col">
     <div className="card">
 <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="300px"/>
 <div className="card-body">
   <h5 className="card-title">Blog one</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" className="btn btn-primary">Go somewhere</a>
 </div>
</div>    </div>
   <div className="col">
     <div className="card" >
 <img src="https://picsum.photos/200/303" className="card-img-top" alt="..." height="300px"/>
 <div className="card-body">
   <h5 className="card-title">Blog Two</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" className="btn btn-primary">Go somewhere</a>
 </div>
</div>
   </div>
   <div className="col">
     <div className="card">
 <img src="https://picsum.photos/200/305" className="card-img-top" alt="..." height="300px"/>
 <div className="card-body">
   <h5 className="card-title">Blog Three</h5>
   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" className="btn btn-primary">Go somewhere</a>
 </div>
</div>
   </div>
 </div>

</div>
<h1 className="form">Contact Me</h1>
<div class="box">
<form>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
  </div>

        </>
    )
}
export default NewBlog;