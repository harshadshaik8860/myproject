
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Multiproducts = () => {

  const [arraylist, updatedArraylist] = useState([])

  const getData = () => {
    fetch("multiarray.json")
      .then(response => response.json())
      .then(result => updatedArraylist(result))
  }

  const { id } = useParams();

  useEffect(() => {
    getData();
    
  }, [true])

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-md-12 text-center">
          <h1>{arraylist.length}</h1>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <ul className="list-group">
            <li className="list-group-item active">Available Service</li>
            {
              arraylist.map((xcity, index) => {
                return (
                  <li className="list-group-item" key={index}><Link to={`${index}/array`}>{xcity.category}</Link> </li>

                )
              })
            }
          </ul>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-4" >
              {
                
                arraylist[index].service.map((product, index) => {
                  return (
                    <div className="card">
                      <div className="card-header"></div>
                      <div className="card-body">
                        {service[id].service}
                      </div>
                      <div className="card-footer"></div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Multiproducts;
