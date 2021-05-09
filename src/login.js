import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            message1: '',
            message2: '',
            count : 20,
            msg:'',
            msg2:''
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount(){ 
      
        clearInterval(this.interval)
        
    }
    
    
    tick = ()=>{
               
                if(this.state.count !== 0){
                    
                    this.setState({
                        count : this.state.count -1,
                        msg2:"Page will expire in.."
                    })
                    
                
            }else{
                if(this.state.count === 0){
                    
                this.setState({
                    msg:<i className='fa fa-redo'>Please Refresh the page</i>,
                   
                }) 
               
                }
        } 
        
    }
    
 
    
    processEmail = (obj) =>{
            this.setState({
                email : obj.target.value
            });
    }
    processPassword = (obj) =>{
        this.setState({
            password : obj.target.value
        });
}

goLogin = () =>{
    if((this.state.email==="harshadshaik@gmail.com") && (this.state.password==="123")){
        this.setState({
            message1 : "Login successfully ..."
        })
        localStorage.setItem("name" , "Harshad");
        localStorage.setItem("userid", "7306462898");
        window.location.reload();
    }else{
        this.setState({
            message2: "Invalid Email or password"
        })
    }
}
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <p className="text-center text-success">{this.state.message1}</p>
                        <p className="text-center text-danger">{this.state.message2}</p>
                        <div className="card">
                            <div className="card-header text-center bg-secondary text-white">Login</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="text" className="form-control"
                                    onChange={this.processEmail} />
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input type="password" className="form-control" 
                                    onChange={this.processPassword}/>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <h6 className="text-center text-danger">{this.state.msg2}</h6>
                            <p className="text-center text-success">{this.state.count} s</p>
                            <div className="text-center mb-4 text-primary"><a href="/login">{this.state.msg}</a></div>
                            </div>
                            
                            <div className="card-footer text-center">
                                <button className="btn btn-secondary btn-block" onClick={this.goLogin}>Login</button>
                                <hr className="bg-primary"/>
                                <div>
                                    Don't have an acoount? <a href="/6/signup">Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        );
    }
}
export default Login;