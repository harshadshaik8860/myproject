import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faHouseUser, faUsers, faUser, faPhoneAlt, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Services from './Services';
import Advertisement from './Advertisement';
import ContactUs from './contactus';
import AboutUs from './aboutus';
import Login from './login';
//import SignUp from './signup';
import Register from './signup';
import Conditionalrendering from './Components/conditionalrendering';


function App() {

  if(localStorage.getItem("userid")==null){
    return(
    
      
      <Login />
      
    )
  }else{
  
  return (
    
    <BrowserRouter>
    
  <HashRouter>
    
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route  path="/:userid/services" component={Services}/>
      <Route exact path="/:id/advertisement" component={Advertisement}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/login" component={Login}/>
      <Route path="/:userid/signup" component={Register}/>

      </HashRouter>   
      <Conditionalrendering/>
      </BrowserRouter>
 
  );
}
}
library.add(fab, faCheckSquare, faCoffee, faHouseUser, faUsers, faUser, faPhoneAlt, faExclamationCircle)
export default App;
