import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faHouseUser, faUsers, faUser, faPhoneAlt, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {HashRouter , Route} from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/home';
import Services from './Components/Services'
import Advertisement from './Components/Advertisement';
import ContactUs from './Components/contactus';
import AboutUs from './Components/aboutus';
import Login from './Components/login';
//import SignUp from './signup';
import Register from './Components/signup';




function App() {
  if(localStorage.getItem("userid")==null){
    return(
      <Login />
    )
  }else{
  
  return (
    <HashRouter>
  
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/:id/services" component={Services}/>
      <Route exact path="/:userid/advertisement" component={Advertisement}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/login" component={Login}/>
      <Route path="/:userid/signup" component={Register}/>
      
      </HashRouter>
  
  );
}
}
library.add(fab, faCheckSquare, faCoffee, faHouseUser, faUsers, faUser, faPhoneAlt, faExclamationCircle)
export default App;
