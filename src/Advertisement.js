import React, {useEffect, useState } from 'react';
import { Link , useParams} from 'react-router-dom';


const Advertisement = () =>{

    const temp = {

        "name" : "harsha",
        "About" :"Learn",
        "Photo":"1.jpg"
    };
    
    const [data , updateData] = useState([temp])
    
    const getUser =()=>{
        fetch("adv.json")
        .then(response=> response.json())
        .then(result=>updateData(result))
    }

    const {id} = useParams();

    useEffect(()=>{
        getUser();
    },[true])
        
    
 
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="text-center mt-4 text-success">Available products:{data.length}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active"> Available Products</li>
                        {
                            data.map((xpro , index)=>{
                                return(
                                <li className="list-group-item" key={index}><Link to={`/${index}/advertisement`}>{xpro.name}</Link></li>
                            );
                        })
                        
                        }
                       
                    </ul>
                </div>
               

           
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <p>{data[id].name}</p>
                        </div>
                        <div className="card-body">
                            <img src={data[id].Photo} className="img-fluid rounded"/>
                        </div>
                        <div className="card-footer">
                            <p>{data[id].About}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            
                </div> 
        </div>
    );
}
export default Advertisement;