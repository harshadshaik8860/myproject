import {useState , useEffect} from 'react';
import { Link , useParams } from 'react-router-dom';

const Services = () =>{

    const temp = {
                        "name" : "abc",
                        "About":"nice",
                        "Photo":"1.jpg"
    }

    const[products, updateProducts] = useState([temp]);

    const getProduct = () =>{
        fetch("service.json")
        .then(response=>response.json())
        .then(result=>updateProducts(result))
    }

    const {id} = useParams();

    useEffect(()=>{
        getProduct();
    },[true])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-success text-center">
                    <h2> No of products : {products.length}</h2>
                </div>
                
                   <div className="row mt-5"> 
                <div className="col-md-6">
                <ul className="list-group">
                    <li className="list-group-item active"> Available Products</li>
                
                
                {
                    products.map((xpro , index)=>{
                        return(
                            <li className="list-group-item text-center"><Link to={`/${index}/services`}>{xpro.name}</Link></li>
                                
                        );
                    })
                }
                </ul>
                </div>
                <div className="col-md-4">
                    <Link to="">
                                    <div class="card">
                                        <div className="card-header text-center">
                                    <p>{products[id].name}</p>
                                    </div>
                                    <div className="card-body">
                                    <img src={products[id].Photo} className="img-fluid rounded text-center"/>
                                    </div>
                                    <div className="card-footer text-center">
                                    <p>{products[id].About}</p>
                                    </div>
                                    </div>
                                    </Link>
                                    </div>
                            
               </div>
                </div>
                </div>        

    )

}
export default Services;