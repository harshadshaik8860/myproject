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
                <div className=" col-md-12 text-success text-center">
                    <h2> No of products : {products.length}</h2>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6 form-group">
                       <div className="row">
                {
                    products.map((xpro , index)=>{
                        return(
                            
                            <div className="col-md-12 form-group">
                                    <a href=""><div className="card">
                                        <div className="card-header text-center" key={index}>  
                                        <h5>{xpro.name}</h5>
                                        </div>
                                        <div className="card-body text-center">
                                                 <img src={xpro.Photo} className="img-fluid rounded"/>
                                        </div>
                                        <div className="card-footer text-center">
                                        <p>{xpro.About}</p>
                                        </div>
                                     </div></a>
                                     </div>
                                    
 
                        )
                    })
                }
                </div>
                </div>
                </div>
                </div>
               

    )

}
export default Services;