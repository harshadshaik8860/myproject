import React from 'react';
import { Link, useParams } from 'react-router-dom';


const PageNumber = () => {
  const { userid } = useParams();
  return (

    <div className="container">
      <div className="row mt-1">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card mt-3">
            <div className="card-header bg-secondary">
              <h5 className="text-center text-white">Register Here</h5>
            </div>
            <div className="card-body">
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className=" form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">First Name <span className="required-mark text-danger">*</span></div>
                    </div>
                    <input type="text" placeholder="Enter Last Name" className="form-control" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">Last Name</div>
                    </div>
                    <input type="text" placeholder="Enter Last Name" className="form-control" />
                  </div>
                </div>
                </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">Mobile No.<span className="required-mark text-danger">*</span></div>
                    </div>
                    <input type="number" placeholder="Enter Mobile No" className="form-control pr-5" />
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text form-control">Email Id <span className="required-mark text-danger">*</span></div>
                        </div>
                        <input type="email" placeholder="Enter Email id" className="form-control"/>
                      </div>
                    </div>
              </div>

              <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">DOB<span className="required-mark text-danger">*</span></div>
                    </div>
                    <input type="number" placeholder="DD/MM/YYYY" className="form-control pr-5" />
                    </div>
                    </div>     
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="form-group input-group">
                <div className="input-group-text form-control">
                Gender<span className="required-mark text-danger">*</span>
                </div>  
              </div>
            </div>
            <div className="col-md-3">
            <div className="form-group input-group">
                <div className="input-group-text">
                Male
                <input type="radio" name="abe" className="ml-5"/>
                </div>  
              </div> 
            </div>
            <div className="col-md-3">
            <div className="form-group input-group">
                <div className="input-group-text">
                Female
                <input type="radio" name="abe" className="ml-5"/>
                </div>  
              </div> 
            </div>
            <div className="col-md-3">
            <div className="form-group input-group">
                <div className="input-group-text">
                others
                <input type="radio" name="abe" className="ml-5"/>
                </div>  
              </div> 
            </div>
          </div>
          <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">City<span className="required-mark text-danger">*</span></div>
                    </div>
                    <select className="form-control">
                      <option>------Choose------</option>
                      <option>Banlore</option>
                      <option>Chennai</option>
                      <option>Hyderabad</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Nellore</option>
                    </select>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text form-control">State<span className="required-mark text-danger">*</span></div>
                        </div>
                        <select className="form-control">
                      <option>------Choose------</option>
                      <option>Andhra Pradhesh</option>
                      <option>Telangna</option>
                      <option>Karnataka</option>
                      <option>Tamilnadu</option>
                      <option>Maharashta</option>
                      <option>Delhi</option>
                    </select>
                      </div>
                    </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col-md-12">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        Address :<span className="required-mark text-danger">*</span>
                      </div>
                    </div>
                    <textarea className="form-control form-control-lg"></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
            <div className="col-md-12">
              <div className="text-center">
                
                <span className="required-mark text-danger mr-3">*</span><input type="checkbox" name="abe" className="mr-3 text-success"/>
                I agree, Term's And Conditions
              </div>
            </div>
          </div>
          </div>
          <div className="card-footer text-center bg-secondary">
            <button className="btn btn-primary text-white text-center rounded btn-sm">Submit</button>
            <button className="btn btn-danger text-white text-center rounded btn-sm">Clear</button>
            <hr className="bg-warning" />
            <div>
            you've an account?<Link to="/login" className="text-warning"> Login</Link>
            </div>
          </div>
          
        </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  )
}
export default PageNumber;