import React from 'react';
import {Link , useParams} from 'react-router-dom';


const PageNumber = () =>{
  const {userid} = useParams();
     return(
      
      <div className="container">
          <h1 className="text-center text-primary">Register Here</h1>
          <div className="row">
                <div className="col-md-3"></div>
               
                <div className="col-md-8">
                <form>
                     <div className="form-group input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"/>
                              <label>Full Name</label>
                          </div>
                            <input type="text" className="form-control"/>
                        </div>
                        </form>
                </div>
                
                <div className="col-md-3"></div>
          </div>
      </div>
  )
}
export default PageNumber;