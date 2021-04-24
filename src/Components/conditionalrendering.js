import React, { Component } from 'react'
import Register from '../signup';
import Home from '../home';
import Login from '../login';
class conditionalrendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return(
        //    <div>welcome harshad</div>
        //    )
        // }else{
        //     return(
        //     <div>welcome Guest</div>
        //     )
        // }
//second method
        // let message
        // if(this.state.isLoggedIn){
        //     return(
        //     message=<div>Welcome harshad</div>
        //     )
        // }else{
        //     return(
        //     message =<div>Welcome gust</div>
        //     )
        // }

        // third mentod
        // return(
        //     this.state.isLoggedIn?(<div><Home  name="harshed"/></div>):<div><Login/></div>
        // )
return this.state.isLoggedIn && <div>welcome harshad</div>
       
    }
}

export default conditionalrendering
