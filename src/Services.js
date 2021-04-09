import {useState , useEffect} from 'react';

const Services = () =>{

    const[products , updateProducts] = useState([]);

    const getProduct = () =>{
        fetch("service.json")
        .then(response=>response.json())
        .then(result=>updateProducts(result))
    }

    useEffect(()=>{
        getProduct();
    },[true])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-3 from-group">
                <div className="text-success text-center">
                    <h2> No of products : {products.length}</h2>
                </div>
                {
                    products.map((xpro , index)=>{
                        return(
                            
                                    <div className="card">
                                        <div className="card-header text-center" key={index}>
                                            
                                        <h3>{xpro.name}</h3>
                                        </div>
                                        <div className="card-body">
                                                 <img src={xpro.Photo} className="img-fluid rounded"/>
                                        </div>
                                        <div className="card-footer text-center">
                                        <p>{xpro.About}</p>
                                        </div>
                                     </div>
                                    
 
                        )
                    })
                }
                </div>
                </div>

                
           </div>

    )

}
export default Services;