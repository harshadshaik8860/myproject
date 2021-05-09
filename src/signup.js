
import React ,{Component} from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import Redirect from 'react-router-dom';

class Register extends Component{
    constructor(){
      super();
      this.state ={
        userdata : [],
        fname:'', mobile:'', email:'', Lname:'', dob:'', address:'', oth:'', male:'',
        fmale:'', city:'', agree:'', state:'', pass1:'', repass1:'', msg:'',
       
       
      }
    }
processName =(obj)=>{
    this.setState({
      fname : obj.target.value
    })
}

processLastName =(obj)=>{
  this.setState({
    Lname:obj.target.value
  })
}

processMobile =(obj)=>{
  this.setState({
    mobile:obj.target.value
  })
}

processEmail =(obj)=>{
  this.setState({
    email:obj.target.value
  })
}

processPassword =(obj)=>{
  this.setState({
    pass1:obj.target.value
  })
}
processPassword2 =(obj)=>{
  this.setState({
    repass1:obj.target.value
  })
}

processDob =(obj)=>{
  this.setState({
    dob:obj.target.value
  })
}

processMale =(obj)=>{
  this.setState({
    male:obj.target.value
  })
}

processFemale =(obj)=>{
  this.setState({
    fmale:obj.target.value
  })
}
processOther =(obj)=>{
  this.setState({
    oth:obj.target.value
  })
}
processCity =(obj)=>{
  this.setState({
    city:obj.target.value
  })
}

processState =(obj)=>{
  this.setState({
    state:obj.target.value
  })
}

processAddress =(obj)=>{
  this.setState({
    address:obj.target.value
  })
}

processAgree =(obj)=>{
  this.setState({
    agree:obj.target.value
  })
}


 render(){
  return (

    <div className="container">
      <div className="row mt-1">
        <div className="col-md-2 col-2 col-sm-2 col-lg-2 col-xl-2"></div>
        <div className="col-md-8 col-8 col-sm-8 col-lg-8 col-xl-8">
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
                    <input type="text" placeholder="Enter Last Name" className="form-control" 
                    onChange={this.processName}/>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">Last Name</div>
                    </div>
                    <input type="text" placeholder="Enter Last Name" className="form-control"
                    onChange={this.processLastName}/>
                  </div>
                </div>
                </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">Mobile No.<span className="required-mark text-danger">*</span></div>
                    </div>
                    <input type="number" placeholder="Enter Mobile No" className="form-control" 
                    onChange={this.processMobile}/>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text form-control">Email Id <span className="required-mark text-danger">*</span></div>
                        </div>
                        <input type="email" placeholder="Enter Email id" className="form-control"
                        onChange={this.processEmail}/>
                      </div>
                    </div>
              </div>

              <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">Password<span className="required-mark text-danger">*</span></div>
                    </div>
                    <input type="number" placeholder="Enter password" className="form-control"
                    onChange={this.processPassword} />
                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text form-control">Conf-Password<span className="required-mark text-danger">*</span></div>
                        </div>
                        <input type="password" placeholder="re-enter pssoword" className="form-control"
                        onChange={this.processPassword2}/>
                      </div>
                    </div>
              </div>

              <div className="row mt-3">
                    <div className="col-md-6">
                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text form-control">DOB<span className="required-mark text-danger">*</span></div>
                    </div>
                    <input type="number" placeholder="DD/MM/YYYY" className="form-control"
                    onChange={this.processDob} />
                    </div>
                    </div>     
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 col-sm-6 col-6 col-md-6 col-xl-3">
              <div className="form-group input-group">
                <div className="input-group-text form-control">
                Gender<span className="required-mark text-danger">*</span>
                </div>  
              </div>
            </div>
            <div className="col-lg-3">
            <div className="form-group input-group">
                <div className="input-group-text">
                Male
                <input type="radio" name="abe" className="ml-5"
                onChange={this.processMale}/>
                </div>  
              </div> 
            </div>
            <div className="col-lg-3">
            <div className="form-group input-group">
                <div className="input-group-text">
                Female
                <input type="radio" name="abe" className="ml-5"
                onChange={this.processFemale}/>
                </div>  
              </div> 
            </div>
            <div className="col-lg-3">
            <div className="form-group input-group">
                <div className="input-group-text">
                others
                <input type="radio" name="abe" className="ml-5"
                onChange={this.processOther}/>
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
                    <select className="form-control" onChange={this.processCity}>
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
                        <select className="form-control" onChange={this.processState}>
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
                    <textarea className="form-control form-control-lg" onChange={this.processAddress}></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
            <div className="col-md-12">
              <div className="text-center">
                
                <span className="required-mark text-danger mr-3">*</span><input type="checkbox" name="abe" className="mr-3 text-success"
                onChange={this.processAgree}/>
                I agree, Term's And Conditions
              </div>
            </div>
          </div>
          </div>
          <div className="card-footer text-center bg-secondary">
            <button className="btn btn-primary text-white text-center rounded btn-sm" onClick={this.saveData}>Submit</button>
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

}
export default Register;