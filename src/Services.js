import React, {useState , useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';

const Services = () =>{

    const temp = {

        "name" : "harsha",
        "About" :"Learn",
        "Photo":"1.jpg"
    };
    
    const[products, updateProducts] = useState([temp]);

    const getProduct = () =>{
        fetch("service.json")
        .then(response=>response.json())
        .then(result=>updateProducts(result))
    }

   const {userid} =useParams();
    
   useEffect(()=>{
        getProduct();
    },[false])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-success text-center">
                    <h2> No of products : {products.length}</h2>
                </div>
             </div>
             <div className="row">
                <div className="col-md-3">
                    <ul className="list-group">
                        <li className="list-group-item active"> Available Products</li>
                        {
                            products.map((xpro , index)=>{
                                return(
                                <li className="list-group-item" key={index}><Link to={`/${index}/services`}>{xpro.name}</Link></li>
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
                            <p>{products[userid].name}</p>
                        </div>
                        <div className="card-body">
                            <img src={products[userid].Photo} className="img-fluid rounded"/>
                        </div>
                        <div className="card-footer">
                            <p>{products[userid].About}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                
                </div>    
                </div>    

    )

}
export default Services;