import React, { useEffect, useState } from 'react';
import { Link , useParams} from 'react-router-dom';
import Products from './products';

const Advertisement = () =>{
    const temp =[
        {
            "category" : "abc",
            "product":[ "bca", "xyz"]
        }
    ]

    
    const [data , updateData] = useState([temp])
    const getUser =()=>{
        fetch("adv.json")
        .then(response=> response.json())
        .then(result=>updateData(result))
    }

    useEffect(()=>{
        getUser();
        
    },[true])

 const {userid} = useParams();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center mt-4 text-success">Available products:{data.length}</h4>
                </div>
            </div>
            <div class="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active"> Available Products</li>
                        {
                            data.map((xpro , index)=>{
                                return(
                                <li className="list-group-item"><Link to={`/${index}/advertisement`}>{xpro.category} </Link></li>
                            );
                        })
                        }
                    </ul>
                </div>
                        <div className="col-md-9">

                        {
                            data.map((xp , index)=>{
                                return(
                                  <> 
                                <Products
                                key={index}
                                name={xp.product}/>

                                <br/>
                                </>

                                
                                )
                            })
                        }
                        
                    </div>
                
            </div>    
            
        </div>
    );
}
export default Advertisement;