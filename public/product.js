
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
const Myproduct = () => {
  const [arraylist, updatedArraylist] = useState([{"category" :"","service" :[]}])
  const getData = () => {
    fetch("multiarray.json")
      .then(response => response.json())
      .then(result => updatedArraylist(result))
  }

  const {id} = useParams();
 
  useEffect(() => {
    getData();
  }, [true])

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h1> Available services :{arraylist.length}</h1>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item active">Available Service</li>
            {
              arraylist.map((xcity, index) => {
                return (
                  <div key={xcity.id}>
                     <li className="list-group-item">
                         <Link to={`/${index}/productlist`}>{xcity.category}  </Link></li> 
                     </div>
                )
              })
            }
              
          </ul>
        </div>
        <div className="col-md-8">
            <h2> {id} </h2>
            {
                arraylist[id].service.map((xservice , index2)=>{
                    return(
                        <p key={index2}> {xservice} </p>
                    )
                })
            }
        </div>
        
        
</div> 

      </div>

   
  )
}

export default Myproduct;
