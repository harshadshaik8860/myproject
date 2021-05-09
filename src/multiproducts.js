
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { DropdownSubmenu} from "react-bootstrap-submenu";

const Multiproducts = () => {

  const [arraylist, updatedArraylist] = useState([{"title":"","Electronics":"","service":[]}])

  const getData = () => {
    fetch("multiarray.json")
      .then(response => response.json())
      .then(result => updatedArraylist(result))
  }

  const {id} = useParams();
 
  useEffect(() => {
    getData(); 
  }, [id])

  return (
    <section>
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h1> Available services :{arraylist.length}</h1>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-3">
          <ul className="list-group">
            <li className="list-group-item active">Available Service</li>
            {
              arraylist.map((xcity, index) => {
                return (
                  
                     <li className="list-group-item" key={index}>
                       <Link to={`/${index}/array`}>{xcity.title} ({xcity.service.length})
                       </Link>
                        
                       </li>       
                    
                  
                )
              })
            }
              
          </ul>      
        </div>
        <div className="col-md-9">
              {
                arraylist[id].service.map((xservice , i)=>{
                  return(
                  
                    <div className="row code mt-0">
            <div className="col-md-12">
                    <div className="card">
                      <div className="card-header"></div>
                        <div className="card-body">
                          <p key={i}>{xservice}</p>
                     </div>
                      <div className="card-footer"></div>
                    </div>
                    <br/>
                    <br/>
                    </div>
                    
                    
                    </div>
           
                  )
                })
              }
              
            
        </div>
        
        
</div> 
</section>
  )
}

export default Multiproducts;
