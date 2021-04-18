import React, { useEffect, useState } from 'react';
import { Link , useParams} from 'react-router-dom';

const service = [
    {
        category: "web",
        pro1: ["Website desing", "webtemplate"]
    },
    
    {   
        category: "advertisement",
            pro2:["Google Ads", "Facebook", "instagram"]
    }
    
];


const Advertisement = () =>{

    const {userid} = useParams();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center mt-4 text-success">Available products:{service.length}</h4>
                </div>
            </div>
            <div class="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item active"> Available Products</li>
                        {
                            service.map((xpro , index)=>{
                                return(
                                <li className="list-group-item"><Link to={`/${index}/advertisement`}>{xpro.category} </Link></li>
                            );
                        })
                        }
                    </ul>
                </div>
            
                
                {
                        
                        service.map((xserv , pos)=>{
                            return(
                                <div className="col-md-2">
                                <div className="card">
                        <div className="card-header"></div>
                        <div className="card-body">
                                <p>{xserv.pro1}</p>
                                
                        <p>{xserv.pro2}</p>
                                
                                
                                </div>
                            </div>
                        
                    </div>
                    
                            )
                        })
                    }
                
                    
                </div>
                
            
        </div>
    );
}
export default Advertisement;