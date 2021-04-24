import React from 'react';
import conditionalrendering from './Components/conditionalrendering';


const Home = (props) => {
  
    
     return(
      //  <div>
      //  {props.name}
      //  </div>
     
      <section className="p-5 bg-primary">
        
      <div className="row back">
        <div className="col-md-12">
          <div className="text-center bg-white">
            </div>
            <marquee>
              <div className="row">
                <div className="col-md-3">
              <div className="card bg-secondary">
                <p className="text-center p-5">Google Ads</p>
                </div>
              </div>
              <div className="col-md-3">
              <div className="card">
                <p className="text-center p-5">Facebook Ads</p>
                </div>
              </div>
              <div className="col-md-3">
              <div className="card">
                <p className="text-center p-5">Instagram Ads</p>
                </div>
              </div>
              <div className="col-md-3">
              <div className="card">
                <div className="text-center p-5">Ourservices</div>
                </div>
              </div>
              </div>
            </marquee>
          </div>
          </div>
          {/* {props.login} {props.home} */}
      </section>
      
      );
    

}
export default Home;